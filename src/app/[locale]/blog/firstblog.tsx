// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const postsPerPage = 1;

//   useEffect(() => {
//     fetchPosts();
//   }, [page]);

//   const fetchPosts = async () => {
//     const res = await fetch(`https://bal.ergotree.pl/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}`);
//     const data = await res.json();
//     setPosts(data);
//   };

//   console.log(posts, 'posts');
//   return (
//     <div>
//       <h1>Blog</h1>
//       {posts.map(post => (
//         <div key={post.id}>
//           <Link href={`/blog/post/${post.slug}`}>
//             <h2>{post.title.rendered}</h2>
//           </Link>
//           <p>Date: {new Date(post.date).toLocaleDateString()}</p>
//           <p>Excerpt: {post.excerpt.rendered}</p>
//           <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//           <p>Author: {post.author}</p>
//           <p>Categories: {post.categories.join(', ')}</p>
//           <p>Tags: {post.tags.join(', ')}</p>
//           <p>Link: <a href={post.link}>{post.link}</a></p>
//           <p>Status: {post.status}</p>
//         </div>
//       ))}
//       <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Poprzednia strona</button>
//       <button onClick={() => setPage(prev => prev + 1)}>Następna strona</button>
//     </div>
//   );
// }



