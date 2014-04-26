<?php
$domain = $_SERVER['SERVER_NAME'];

if (strpos($domain, 'isinvorm') !== false) {

    header('Location: /leon');
} else if (strpos($domain, 'kimlynn') !== false) {

    header('Location: /kim');
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Verdig - Home</title>
        <meta charset="UTF-8">
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div id="vertical-menu-container">
            <ul id="vertical-menu">
                <li class="vertical-menu-listitem" id="home-listitem">
                    <span class="menu-icon icon-home"></span>
                    <label>Home</label>
                </li>
                <li class="vertical-menu-listitem" id="what-we-do-listitem">
                    <span class="menu-icon icon-what-we-do"></span>
                    <label>Wat doen wij</label>
                </li>
                <li class="vertical-menu-listitem" id="who-we-are-listitem">
                    <span class="menu-icon icon-who-we-are"></span>
                    <label>Wie zijn wij</label>
                </li>
                <li class="vertical-menu-listitem" id="portfolio-listitem">
                    <span class="menu-icon icon-portfolio"></span>
                    <label>Portfolio</label>
                </li>
                <li class="vertical-menu-listitem" id="contact-listitem">
                    <span class="menu-icon icon-contact"></span>
                    <label>Contact</label>
                </li>
            </ul>
        </div>
        <div class="section active" id="home-section">
            <div id="logo"></div>
            <a href="#what-we-do"><img id="navigate-down-arrow" src="images/arrow-down.png" alt="Volgende pagina"></a>
        </div>
        <div class="section" id="what-we-do-section">
            <img class="device-image" id="imac-image" src="images/imac_flat.png" alt="iMac"/>
            <img class="device-image" id="iphone-image" src="images/iphone_flat.png" alt="iPhone"/>
            <img class="device-image" id="ipad-image" src="images/ipad_flat.png" alt="iPad"/>
        </div>
        <div class="section">
            <div id="splitlayout" class="splitlayout">
                <div class="intro">
                    <div class="side side-left">
                        <div class="intro-content">
                            <div class="profile"><img src="images/robin.jpg" alt="profile1"></div>
                            <h1><span>Robin Verheijen</span><span class="divider"></span><span>Web Developer</span></h1>
                        </div>
                    </div>
                    <div class="side side-right">
                        <div class="intro-content">
                            <div class="profile"><img src="images/saron.jpg" alt="profile2"></div>
                            <h1><span>Saron Grave</span><span class="divider"></span><span>Web Designer</span></h1>
                        </div>
                    </div>
                    <div class="page page-right">
                        <div class="page-inner">
                            <section>
                                <h2>Web Development</h2>
                                <p>Scenario archetype complementary responsive script pixel sidebar sitemap keep it simple. Complementary visuals footer CSS from alan cooper delightful.  Photoshop iconography simplicity user experience affordance narrative ascenders contour.  Slab serif interstitial skeuomorphism illustrator design by committee simplicity alan cooper eye tracking.  Typography contrast mental model typesetting affordance narrative from CSS. Retina simplicity design by committee typography oblique.</p>
                                <p>Delightful ascenders contrast prototype. Ligature jakob nielsen user measure.  Ligature contrast glyph rule of thirds composition interstitial dribbble.  Mental model typography urbanized balance.  Resolution rounded corners IDEO constraints dribbble persona.  Portfolio sketch baseline 66-character line.  Usability testing mental model simplicity aspect ratio pencil type.  Usable sans-serif visualization leading prägnanz baseline pencil fireworks clarity omnigraffle.</p>
                            </section>
                        </div>
                    </div>
                    <div class="page page-left">
                        <div class="page-inner">
                            <section>
                                <h2>Web Design</h2>
                                <p>Scenario archetype complementary responsive script pixel sidebar sitemap keep it simple. Complementary visuals footer CSS from alan cooper delightful.  Photoshop iconography simplicity user experience affordance narrative ascenders contour.  Slab serif interstitial skeuomorphism illustrator design by committee simplicity alan cooper eye tracking.  Typography contrast mental model typesetting affordance narrative from CSS. Retina simplicity design by committee typography oblique.</p>
                                <p>Delightful ascenders contrast prototype. Ligature jakob nielsen user measure.  Ligature contrast glyph rule of thirds composition interstitial dribbble.  Mental model typography urbanized balance.  Resolution rounded corners IDEO constraints dribbble persona.  Portfolio sketch baseline 66-character line.  Usability testing mental model simplicity aspect ratio pencil type.  Usable sans-serif visualization leading prägnanz baseline pencil fireworks clarity omnigraffle.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <a href="#" class="back back-right" title="Terug naar overzicht">X</a>
                <a href="#" class="back back-left" title="Terug naar overzicht">X</a>
            </div>
        </div>
        <div class="section" id="portfolio-section">
            <div class="portfolio-row">
                <h2 id="portfolio-title-web">Web</h2>
                <img class="portfolio-image" id="imac-portfolio" src="images/imac_flat.png" alt="iMac"/>
            </div>
            <div class="portfolio-row">
                <h2 id="portfolio-title-app">App</h2>
                <img class="portfolio-image" id="iphone-portfolio" src="images/iphone_flat.png" alt="iPhone"/>
            </div>
        </div>
        <div class="section" id="contact-section">
            <form class="contact-form">
                <input id="contact-name" type="text" placeholder="Naam">
                <input id="contact-email-address" type="email" placeholder="E-mailadres">
                <input id="contact-phone-number" type="tel" placeholder="Telefoonnummer">
                <textarea id="contact-message" placeholder="Uw bericht"></textarea>
                <input id="contact-send" type="submit" value="Verstuur">
            </form>
        </div>
        <link href="css/jquery.fullPage.min.css" rel="stylesheet"/>
        <link href="css/splitlayout.css" rel="stylesheet"/>
        <script src="js/jquery-2.1.0.min.js"></script>
        <script src="js/jqueryui-1.10.4.min.js"></script>
        <script src="js/jquery.fullPage.min.js"></script>
        <script src="js/index.js"></script>
        <script src="js/SplitLayout.min.js"></script>
    </body>
</html>