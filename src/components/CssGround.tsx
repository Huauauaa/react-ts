import logo from '../assets/images/logo-32x32.png';
import '../assets/styles/css-ground.less';

function CssGround() {
  return (
    <fieldset className="css-ground">
      <legend>css</legend>
      <div style={{ backgroundColor: '#cd0000' }}>
        <span style={{ display: 'inline-block' }}></span>
      </div>
      <hr />
      <div>
        <img src={logo} alt="logo" style={{ float: 'left' }} />
        <p data-blue>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas voluptate. Dolorem aperiam quasi qui!
          Ipsa eaque architecto cupiditate qui non illo voluptate praesentium voluptatem quae incidunt suscipit
          similique magnam, quisquam quo debitis iusto, sed, repellat deleniti quos iure officiis minima rerum omnis.
          Architecto quas voluptas laudantium deleniti, debitis eius a totam. Aliquid, culpa nulla reprehenderit debitis
          consequuntur numquam commodi sed excepturi minus animi minima earum, quas deserunt sit iusto voluptas optio
          adipisci. Culpa eos id tempore aspernatur cumque distinctio est porro, numquam nihil natus animi similique
          repellat saepe non ad ipsam blanditiis necessitatibus autem. Facilis voluptatem eos necessitatibus maiores!
        </p>
        <p data-pink className="p1">
          <span>Lorem, </span>
          <span>ipsum</span> <span>dolor</span> sit amet consectetur adipisicing elit. Asperiores quibusdam quisquam
          sint mollitia consectetur autem culpa? Rem ratione consequatur dolores.
        </p>
        <p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique?</span>
        </p>
        <p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique?</span>
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, similique?</p>
      </div>
    </fieldset>
  );
}
export default CssGround;
