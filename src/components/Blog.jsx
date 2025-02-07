import React from 'react';
import '../styles/Blog.css';
import blogpost3 from '../assets/blogpost3.jpg'
import blogpost2 from '../assets/blogpost2.jpg'
import blogpost1 from '../assets/blogpost1.jpg'
import blogpost5 from '../assets/blogpost5.jpg'
import blogpost6 from '../assets/blogpost6.jpg'
import blogpost7 from '../assets/blogpost7.jpg'

const blogPosts = [

  {
   
    title: 'Sed magna dui, dignissim id felis vitae, consectetur',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost1, 
  },
  {
    
    title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost2, 
  },
  {
    title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost7, 
  },
  {
    title: 'Nam pharetra fringilla justo, et commodo lacus molestie ut',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost6, 
  },
  {
    
    title: 'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost5, 
  },
  {
    
    title: 'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
    date: 'July 18, 2021',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]',
    image: blogpost3,
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="read-more">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
