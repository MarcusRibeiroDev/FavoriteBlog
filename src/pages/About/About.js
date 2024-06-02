import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <p>
          Nosso site oferece uma plataforma simples e intuitiva para que você
          possa criar e gerenciar seu próprio blog. Com uma interface amigável,
          você pode facilmente compartilhar suas ideias, histórias e paixões com
          o mundo. Utilize nosso editor de postagens para adicionar texto,
          imagens e vídeos de maneira prática e rápida.
        </p>
        <Link to="/posts/create" className="btn">
          Criar post
        </Link>
      </div>
      <div>
        <video className={styles.video} loop autoPlay muted>
          <source
            src="/midia/WhatsApp Video 2024-05-31 at 11.38.33.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
};

export default About;
