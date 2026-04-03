/**
 * Impulsy.ai - Template_Premium_01 (Dra. Thamires Coelho)
 * Configuração de Hidratação Dinâmica
 */

const siteConfig = {
    brand: {
        name: "Thamires Coelho",
        tagline: "Lipo de Papada HD & Bichectomia",
        logoTextTop: "Thamires",
        logoTextBottom: "COELHO",
        logoSubText: "ESTÉTICA AVANÇADA OROFACIAL"
    },
    contact: {
        phone: "5577998621838",
        whatsapp: "https://wa.me/5577998621838",
        instagram: "https://instagram.com/drathamirescoelho",
        googleMaps: "https://maps.app.goo.gl/B9Z2JkzVp7R4Z4Bv8" // Placeholder maps link for Vitoria da Conquista
    },
    theme: {
        palette: {
            primary: "#b08d57", // Ouro Envelhecido (Premium)
            onPrimary: "#ffffff",
            primaryContainer: "#e6cc9a",
            secondary: "#2c241d", // Marrom Café Escuro
            onSecondary: "#ffffff",
            surface: "#fdfbf9", // Bege Nude Claro
            onSurface: "#1a1c1c",
            outline: "#8a7a6e"
        },
        fonts: {
            headline: "'Noto Serif', serif",
            body: "'Manrope', sans-serif"
        }
    },
    hero: {
        title: "O Segredo da Mandíbula Definida: Transformação Natural com o <span class='text-primary italic'>Método TC</span>.",
        description: "Protocolos exclusivos e tecnologia avançada para realçar sua beleza natural sem perder a essência. Especialista em Lipo de Papada HD e Bichectomia.",
        ctaMain: "Conhecer o Método TC",
        ctaSecondary: "Agendar minha avaliação",
        badge: "Dra. Thamires Coelho - Harmonização Orofacial"
    },
    sections: {
        philosophy: {
            title: "Beleza que respeita sua individualidade.",
            text: "O Método TC foi desenvolvido para entregar resultados de alta performance com a máxima naturalidade. Aqui, cada detalhe do seu rosto é planejado para um equilíbrio perfeito."
        }
    }
};

// Exportar para uso no script de hidratação
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
