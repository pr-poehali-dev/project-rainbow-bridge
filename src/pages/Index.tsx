export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СВИН*СТВО</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ДА СУКА
              <br />
              <span>ДООО!</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Место без стыда и цензуры. Честная еда, дерзкие коктейли и атмосфера, где можно быть собой — на полную.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              ЧЕСТНО
              <br />
              И ЖИРНО
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СВИНСТВО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЛЯДСТВО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СВИНСТВО И ГОРДОСТЬ * БЛЯДСТВО НА ТАРЕЛКЕ * ДА СУКА ДООО * ОТКРЫТЫ ДО 2:00 * БЕЗ ЦЕНЗУРЫ *
            СВИНСТВО И ГОРДОСТЬ * БЛЯДСТВО НА ТАРЕЛКЕ * ДА СУКА ДООО * ОТКРЫТЫ ДО 2:00 * БЕЗ ЦЕНЗУРЫ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ-ПАРАД</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://i.ibb.co/DDQmJbxz/IMG-2251.jpg"
                alt="Свинство"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Свинство</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тройная свиная котлета, хрустящая шкварка, соус барбекю на углях и маринованный лук. Без стыда, только кайф.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://i.ibb.co/wh7Zt2kp/IMG-2250.jpg"
                alt="Блядство"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Блядство</h3>
                  <span className="price">1 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пицца с тремя видами мяса, острым мёдом и пармезаном. Неприлично вкусно — ты предупреждён.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Да Сука Дооо"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Да Сука Дооо</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Авторский коктейль, который ты попробуешь и скажешь именно это. Джин, маракуйя, имбирь и дерзость.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ТУТ НЕ СТЕСНЯЮТСЯ.</h2>
            <p className="vibe-text">
              Мы не просто кормим. Мы даём свободу. От дерзкого плейлиста до откровенного меню — каждый уголок создан для тех, кто живёт в полный рост. Дресс-код: себя.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @SVINSTVO.BAR
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">СВИН*СТВО</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Место для тех, кто не врёт. Честная еда, дерзкий бар и атмосфера без фильтров. С 2024, но ощущается как свобода.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 12:00 – 02:00</li>
            <li>Сб–Вс: 11:00 – 03:00</li>
            <li>Кухня до 01:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (999) 000-00-00</li>
            <li>@svinstvo.bar</li>
            <li>ул. Дерзкая, 70</li>
          </ul>
        </div>
      </footer>
    </>
  );
}