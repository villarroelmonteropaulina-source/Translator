// Obtener el idioma del navegador del usuario (ej. "es-ES", "en-US", "pt-BR")
const userLang = navigator.language || navigator.userLanguage;

// Extraer solo los dos primeros caracteres (ej. "es-ES" se convierte en "es")
const shortLang = userLang.substring(0, 2).toLowerCase();

// Definir un idioma por defecto si el del navegador no está en tu lista (ej. "en")
const defaultLang = 'en';

// Verificar si el idioma detectado existe en tus traducciones, si no, usar el por defecto
const initialLang = uiTexts[shortLang] ? shortLang : defaultLang;

// Aplicar el idioma detectado automáticamente al cargar la página
currentLang = initialLang;

// Opcional: Actualizar visualmente la selección en el modal de configuración
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('selected');
    // Si el texto del botón coincide con el idioma, marcarlo como seleccionado
    if (btn.getAttribute('onclick').includes(`'${initialLang}'`)) {
        btn.classList.add('selected');
    }
});