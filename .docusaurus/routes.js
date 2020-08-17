
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','4f8'),
  exact: true,
},
{
  path: '/blog/grpc-rust',
  component: ComponentCreator('/blog/grpc-rust','846'),
  exact: true,
},
{
  path: '/blog/jwt-auth',
  component: ComponentCreator('/blog/jwt-auth','a9b'),
  exact: true,
},
{
  path: '/blog/nodejs-rust-match',
  component: ComponentCreator('/blog/nodejs-rust-match','f1f'),
  exact: true,
},
{
  path: '/blog/react-formik',
  component: ComponentCreator('/blog/react-formik','db3'),
  exact: true,
},
{
  path: '/blog/react-setup',
  component: ComponentCreator('/blog/react-setup','153'),
  exact: true,
},
{
  path: '/blog/scrapping-nodejs',
  component: ComponentCreator('/blog/scrapping-nodejs','017'),
  exact: true,
},
{
  path: '/blog/strapi',
  component: ComponentCreator('/blog/strapi','42e'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','3a8'),
  exact: true,
},
{
  path: '/blog/tags/auth',
  component: ComponentCreator('/blog/tags/auth','077'),
  exact: true,
},
{
  path: '/blog/tags/babel',
  component: ComponentCreator('/blog/tags/babel','ca1'),
  exact: true,
},
{
  path: '/blog/tags/backend',
  component: ComponentCreator('/blog/tags/backend','9b9'),
  exact: true,
},
{
  path: '/blog/tags/cheerio',
  component: ComponentCreator('/blog/tags/cheerio','1e7'),
  exact: true,
},
{
  path: '/blog/tags/cms',
  component: ComponentCreator('/blog/tags/cms','b86'),
  exact: true,
},
{
  path: '/blog/tags/express',
  component: ComponentCreator('/blog/tags/express','ae4'),
  exact: true,
},
{
  path: '/blog/tags/formik',
  component: ComponentCreator('/blog/tags/formik','9d0'),
  exact: true,
},
{
  path: '/blog/tags/grpc',
  component: ComponentCreator('/blog/tags/grpc','038'),
  exact: true,
},
{
  path: '/blog/tags/jwt',
  component: ComponentCreator('/blog/tags/jwt','29c'),
  exact: true,
},
{
  path: '/blog/tags/nodejs',
  component: ComponentCreator('/blog/tags/nodejs','54e'),
  exact: true,
},
{
  path: '/blog/tags/react',
  component: ComponentCreator('/blog/tags/react','1a9'),
  exact: true,
},
{
  path: '/blog/tags/rect',
  component: ComponentCreator('/blog/tags/rect','d22'),
  exact: true,
},
{
  path: '/blog/tags/rust',
  component: ComponentCreator('/blog/tags/rust','c33'),
  exact: true,
},
{
  path: '/blog/tags/scrapping',
  component: ComponentCreator('/blog/tags/scrapping','587'),
  exact: true,
},
{
  path: '/blog/tags/strapi',
  component: ComponentCreator('/blog/tags/strapi','c1e'),
  exact: true,
},
{
  path: '/blog/tags/webpack',
  component: ComponentCreator('/blog/tags/webpack','787'),
  exact: true,
},
{
  path: '/blog/tags/yup',
  component: ComponentCreator('/blog/tags/yup','600'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','cbf'),
  
  routes: [
{
  path: '/projects',
  component: ComponentCreator('/projects','c4e'),
  exact: true,
},
{
  path: '/resume',
  component: ComponentCreator('/resume','1b8'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
