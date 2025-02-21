import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name: string) => `
<h4>A Pensar Clube - Especialistas em Rastreamento Veicular</h4>
<br/>

<p>A Pensar Clube é uma empresa especializada em monitoramento e rastreamento veicular, oferecendo soluções completas de segurança e gestão de frotas para empresas e particulares. Com anos de experiência no mercado, nos destacamos pela qualidade e confiabilidade dos nossos serviços.</p>
<br/>

<p>Em parceria com a Bolt 360, desenvolvemos uma presença digital moderna e intuitiva que permite à Pensar Clube expandir seu alcance e conectar-se de forma eficiente com seus clientes. Nossa solução digital foi cuidadosamente planejada para tornar o acesso aos serviços de rastreamento e monitoramento mais simples e direto.</p>
<br/>

<p>Através de uma interface amigável e responsiva, apresentamos todas as soluções da Pensar Clube de forma clara e objetiva, facilitando a jornada do cliente desde o primeiro contato até a contratação dos serviços.</p>

<br/>
<br/>
<br/>
<p><img alt="Pensar Clube" src="/assets/images/marketing/pensar-clube.png" /></p>
<br/>
<br/>
<br/>

<h4>Nossa Parceria com a Pensar Clube</h4>
<br/>

<p>A equipe da Bolt 360 trabalhou em estreita colaboração com a Pensar Clube para criar uma presença digital que verdadeiramente reflete a qualidade e profissionalismo dos seus serviços de monitoramento veicular.</p>
<br/>

<h4>Soluções Personalizadas para Cada Necessidade</h4>
<br/>

<p>Entendemos que cada cliente tem necessidades específicas quando se trata de rastreamento veicular. Por isso, desenvolvemos uma plataforma que permite apresentar nossas soluções de forma personalizada, atendendo desde proprietários de um único veículo até grandes frotas empresariais.</p>
<br/>

<p>Nossa tecnologia de ponta garante um monitoramento preciso e em tempo real, proporcionando tranquilidade e segurança para nossos clientes.</p>

<br/>

<p>Com a parceria entre Pensar Clube e Bolt 360, conseguimos criar uma plataforma digital que não apenas apresenta nossos serviços, mas também educa e orienta nossos clientes sobre a importância do rastreamento veicular no cenário atual.</p>
<br/>

<p>Nossa missão é garantir que cada cliente encontre facilmente a solução ideal para suas necessidades de segurança veicular, com um processo de contratação simples e transparente.</p>
<br/>

<p>Entre em contato conosco e descubra como podemos ajudar você ou sua empresa com nossas soluções de rastreamento e monitoramento veicular.</p>
`;

const base = (index: number) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Rastreamento Veicular',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutos de leitura',
  tags: _tags.slice(index + 1, index + 2),
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('Rastreamento Veicular'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/pensar-clube.png`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.career(index),  
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));
