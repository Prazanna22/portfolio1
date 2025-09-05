import React, { useEffect, useRef } from 'react';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import { GiTeapot } from 'react-icons/gi';
import { TbTeapot } from 'react-icons/tb';
import { BiCoffee } from 'react-icons/bi';


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animated line effect
    if (lineRef.current) {
      const line = lineRef.current;
      line.innerHTML = line.textContent.replace(/\S/g, "<span class='line-letter'>$&</span>");
      
      const letters = line.querySelectorAll('.line-letter');
      letters.forEach((letter, i) => {
        letter.style.animationDelay = `${i * 0.05}s`;
      });
    }

    // Canvas animation for subtle particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 40;
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width || 
            this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer className="bw-footer px-8">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      
      <div className="footer-content">
        {/* Binary code decorative element */}
        <div className="binary-code">
          01000110 01110010 01101111 01101110 01110100 01100101 01101110 01100100 
          01000100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010
        </div>

        {/* Social icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/durgaprasannau"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
            <span className="social-tooltip">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/iam_prazanna/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={instagram} alt="Instagram" className="social-icon" />
            <span className="social-tooltip">Instagram</span>
          </a>
          <a
            href="https://github.com/Prazanna22"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={github} alt="GitHub" className="social-icon" />
            <span className="social-tooltip">GitHub</span>
          </a>
        </div>

        

        {/* Animated line */}
        <div className="animated-line">
          <div className="line-dot"></div>
        </div>

        {/* Fun tagline with typewriter effect */}
        <p className="footer-tagline" ref={lineRef}>
          © {currentYear} Durga Prasanna U — Built with coffee and way too many console.logs</p>
        

        {/* Sarcastic quote */}
        <p className="footer-quote">
          "If you've scrolled this far, you either liked my portfolio… or you're really bored."
        </p>
      </div>
    </footer>
  );
}; 