import mongose from 'mongoose';


export async function connect() {
    try {
        await mongose.connect('mongodb://localhost/fizjoteka', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('>>> Database is connected');
    } catch (e) {
        console.log('Something went wrong');
        console.log(e);
    }
}