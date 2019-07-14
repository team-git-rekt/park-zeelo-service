// import React from 'react';
// import { shallow } from 'enzyme';
// import App from '../components/App';


// // it('should add', () => {
// //    expect(1+1).toBe(2)
// // })

// describe('First React component test with Enzyme', () => {
//    it('renders without crashing', () => {
//       shallow(<App />);
//     });

//     it('should have a button with text of Hello', () => {
//       const wrapper = shallow(<App />)

//       const button = wrapper.find('button')

//       expect(button.length).toBe(1)
//       expect(button.text()).toBe('Hello')

//     })
// });


// import React from 'react';
// import { shallow } from 'enzyme';
// import BlogPosts from '../components/BlogPosts';
// import BlogPost from '../components/BlogPost'


// it('should have as many li as posts', () => {
//   const blogPosts = ['a','b','c']


//   const wrapper = shallow(<BlogPosts blogPosts={blogPosts}/>)

//   const lis = wrapper.find(BlogPost)

//   expect(lis.length).toBe(blogPosts.length)
// })