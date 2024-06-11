import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export async function POST(request: Request) {
  const { email, names } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  try {
    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: names,
        },
      }
    );

    return new Response(JSON.stringify({ res }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: JSON.parse(error.response.text) }),
      { status: 500 }
    );
  }
}
