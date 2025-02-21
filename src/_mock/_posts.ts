import { _mock } from './_mock';
import { _tags } from './assets';

const content = (name: string) => `
<h4>Por que a Velocidade do Seu Site Impacta Direto no Seu Faturamento?</h4>
<br/>

<p>Você já entrou em um site que demorou para carregar e, sem pensar duas vezes, voltou para o Google em busca de outra opção? Se a resposta for sim, saiba que você não está sozinho! A velocidade de carregamento de um site pode ser o fator decisivo entre conquistar ou perder um cliente.</p>
<br/>

<h4>O Impacto da Lentidão no Seu Negócio</h4>
<br/>

<p>A lentidão de um site pode parecer um detalhe técnico, mas os números mostram que ela afeta diretamente os resultados do seu negócio:</p>
<br/>

<ul>
  <li>53% dos visitantes abandonam um site que demora mais de 3 segundos para carregar (Google).</li>
  <li>A cada segundo extra de carregamento, a taxa de conversão pode cair em até 20% (Think with Google).</li>
  <li>Um site rápido pode aumentar as taxas de conversão em até 2x (HubSpot).<li>
  <li>O Google usa a velocidade do site como critério de ranqueamento, impactando diretamente o SEO e sua visibilidade online.<li>
</ul>
<br/>

<p>Ou seja, se o seu site demora a carregar, ele não só perde clientes, mas também aparece menos nos resultados de busca, dificultando a atração de novos visitantes.</p>

<br/>
<br/>
<br/>
<p><img alt="Pensar Clube" src="/assets/images/marketing/pensar-clube.png" /></p>
<br/>
<br/>
<br/>

<h4>Como a Velocidade do Site Afeta o Faturamento?</h4>
<br/>

<p>Vamos imaginar que sua loja virtual recebe 10.000 visitantes por mês e tem uma taxa de conversão de 3%, ou seja, 300 vendas. Agora, suponha que cada pedido tenha um ticket médio de R$ 200, gerando um faturamento de R$ 60.000 por mês.</p>
<br/>

<p>Se a lentidão do site reduz a conversão em 20%, você perderia 60 vendas no mês, ou R$ 12.000 de faturamento! Agora imagine esse prejuízo acumulado ao longo de um ano.</p>
<br/>

<p>E isso vale não apenas para e-commerces, mas para qualquer site que dependa de leads, cadastros ou interações para gerar negócios.</p>
<br/>

<h4>Conclusão: Um Site Rápido Significa Mais Dinheiro no Seu Bolso</h4>
<br/>

<p>A velocidade do seu site é um fator crítico para o sucesso online. Um site rápido melhora a experiência do usuário, aumenta as conversões e faz seu negócio crescer.</p>
<br/>

<p>Se o seu site ainda é lento, está na hora de agir! Pequenos ajustes podem gerar grandes impactos no seu faturamento.</p>

<p>Quer um site otimizado e de alta performance? Entre em contato com a nossa equipe e descubra como podemos ajudar!</p>
<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
`;

const base = (index: number) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Construção de Sites',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutos de leitura',
  tags: _tags.slice(index + 1, index + 2),
});

export const _blogPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/course/course_6.jpg`,
}));