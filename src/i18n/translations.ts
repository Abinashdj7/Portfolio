export const translations = {
    fr: {
        nav: {
            aboutMe: 'À propos de moi',
            skills: 'Compétences',
            moreSkills: 'Plus de compétences',
            projects: 'Projets (Git)',
        },
        buttons: {
            prev: 'Précédent',
            next: 'Suivant',
        },
        profile: {
            name: 'Abinash Sasikumar',
            title: 'Étudiant à EPITA, Paris, France',
            email: 'Email:',
            emailAddress: 'abinash.sasikumar@proton.me',
            description: 'Passionné par l\'utilisation de la technologie pour créer un changement significatif, je suis un développeur web ambitieux dédié à la création de solutions innovantes qui ont un impact tangible. Avec un œil attentif aux détails et un talent pour la résolution de problèmes, j\'excelle dans les environnements dynamiques où je peux collaborer avec des personnes partageant les mêmes idées pour repousser les limites de ce qui est possible.',
        },
        skills: {
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Bases de données',
            testing: 'Tests & Qualité',
            devops: 'DevOps & Cloud',
            architecture: 'Architecture & Outils',
        },
        projects: {
            einkaufen: {
                title: 'Einkaufen — Plateforme e-commerce',
                description: 'Plateforme e-commerce avec un catalogue de 496 produits et authentification JWT sécurisée. 7 endpoints REST (produits, panier, commandes, profil) — 98ms de réponse moyenne. Spring Boot, React, MySQL, Docker. 55 tests (100% de réussite) et pipeline CI/CD GitHub Actions avec Docker Build & Push vers GHCR.',
            },
            securebank: {
                title: 'SecureBank — Application bancaire',
                description: 'API bancaire sécurisée avec Spring Boot, Spring Security et JWT (rôles ROLE_USER / ROLE_ADMIN). 5 endpoints REST (comptes, transactions, virements) — 29ms de réponse moyenne. Angular, Tailwind CSS, MySQL/Hibernate, conteneurisation complète avec Docker Compose. 115 tests (100% de réussite) sur 2 pipelines CI/CD GitHub Actions.',
            },
            socialMedia: {
                title: 'Application de messagerie en temps réel',
                description: 'Réseau social avec 17 endpoints REST (utilisateurs, chats, messages, posts, likes, commentaires) — 12ms de réponse moyenne. React, Node.js/Express, MongoDB, WebSockets, sécurité OWASP (JWT, bcrypt, helmet, rate limiting, Cloudinary). 54 tests (100% de réussite) et pipeline CI/CD avec Cypress E2E.',
            },
            bougons: {
                title: 'Bougons — Plateforme de VTC',
                description: 'Plateforme de réservation de courses en temps réel (style Uber) en architecture microservices (6 services + 3 apps Next.js 14). Authentification access/refresh tokens via Redis, RBAC rider/driver/admin, sécurité OWASP complète. Stripe, Socket.io, BullMQ, Leaflet, Docker. 223 tests Jest/Supertest (100% de réussite) et pipeline CI/CD à 4 jobs en parallèle.',
            },
        },
    },
    en: {
        nav: {
            aboutMe: 'About Me',
            skills: 'Skills',
            moreSkills: 'More Skills',
            projects: 'Projects (Git)',
        },
        buttons: {
            prev: 'Prev',
            next: 'Next',
        },
        profile: {
            name: 'Abinash Sasikumar',
            title: 'Student in EPITA, Paris, France',
            email: 'Email:',
            emailAddress: 'abinash.sasikumar@proton.me',
            description: 'Passionate about leveraging technology to create meaningful change, I am an ambitious web developer dedicated to crafting innovative solutions that make a tangible impact. With a keen eye for detail and a knack for problem-solving, I thrive in dynamic environments where I can collaborate with like-minded individuals to push the boundaries of what\'s possible.',
        },
        skills: {
            frontend: 'Frontend',
            backend: 'Backend',
            databases: 'Databases',
            testing: 'Testing & Quality',
            devops: 'DevOps & Cloud',
            architecture: 'Architecture & Tools',
        },
        projects: {
            einkaufen: {
                title: 'Einkaufen — E-commerce Platform',
                description: 'E-commerce platform with a 496-product catalog and secure JWT authentication. 7 REST endpoints (products, cart, orders, profile) — 98ms average response time. Spring Boot, React, MySQL, Docker. 55 tests (100% pass) and a GitHub Actions CI/CD pipeline with Docker Build & Push to GHCR.',
            },
            securebank: {
                title: 'SecureBank — Banking Application',
                description: 'Secure banking API built with Spring Boot, Spring Security and JWT (ROLE_USER / ROLE_ADMIN roles). 5 REST endpoints (accounts, transactions, transfers) — 29ms average response time. Angular, Tailwind CSS, MySQL/Hibernate, fully containerized with Docker Compose. 115 tests (100% pass) across 2 GitHub Actions CI/CD pipelines.',
            },
            socialMedia: {
                title: 'Real-time Messaging App',
                description: 'Social network with 17 REST endpoints (users, chats, messages, posts, likes, comments) — 12ms average response time. React, Node.js/Express, MongoDB, WebSockets, OWASP security (JWT, bcrypt, helmet, rate limiting, Cloudinary). 54 tests (100% pass) with a Cypress E2E CI/CD pipeline.',
            },
            bougons: {
                title: 'Bougons — Ride-hailing Platform',
                description: 'Real-time ride-hailing platform (Uber-like) with a microservices architecture (6 services + 3 Next.js 14 apps). Access/refresh token auth via Redis, rider/driver/admin RBAC, full OWASP security. Stripe, Socket.io, BullMQ, Leaflet, Docker. 223 Jest/Supertest tests (100% pass) with a 4-job parallel CI/CD pipeline.',
            },
        },
    },
};
