# Microcapilar Montero - Página Web Premium

Página web profesional para clínica de micropigmentación premium, desarrollada con Next.js 16, React 19 y Supabase.

## 🚀 Tecnologías

- **Next.js 16** - Framework React de última generación
- **React 19** - Biblioteca UI moderna
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first premium
- **Framer Motion** - Animaciones fluidas y profesionales
- **Supabase** - Backend y base de datos (configuración pendiente)
- **Lucide React** - Iconos modernos y elegantes

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar producción
npm start
```

## 🎨 Diseño

El sitio está diseñado con una estética ultra-premium, minimalista y clínica:

- **Paleta de colores**: Blanco puro, negro suave, dorado mate (#C6A667), azul grisáceo, taupe
- **Tipografías**: Inter (display y body) con tracking amplio
- **Estilo**: Combinación de clínica médica premium + marca cosmética internacional
- **Animaciones**: Micro-interacciones sutiles con Framer Motion

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página home
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navbar.tsx          # Navegación sticky
│   ├── Footer.tsx          # Pie de página
│   └── sections/
│       ├── Hero.tsx        # Sección hero
│       ├── Differentiation.tsx
│       ├── Treatments.tsx
│       ├── BeforeAfter.tsx
│       ├── Team.tsx
│       ├── Process.tsx
│       ├── Testimonials.tsx
│       ├── Certifications.tsx
│       └── ContactForm.tsx
└── public/
    └── images/             # Imágenes (ver PROMPTS_IMAGENES.md)
```

## 🖼️ Imágenes

Consulta el archivo `PROMPTS_IMAGENES.md` para obtener los prompts detallados para generar todas las imágenes necesarias con IA.

Las imágenes deben guardarse en `public/images/` siguiendo la estructura indicada en el documento.

## 🔧 Configuración de Supabase

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
```

3. Configura las tablas necesarias para formularios y contactos

## ✨ Características

- ✅ Diseño responsive y mobile-first
- ✅ Animaciones premium con Framer Motion
- ✅ Navegación sticky con transparencia
- ✅ Formulario de contacto funcional
- ✅ Slider de antes/después
- ✅ Optimización SEO
- ✅ Accesibilidad (WCAG)

## 📝 Próximos Pasos

1. Generar imágenes usando los prompts en `PROMPTS_IMAGENES.md`
2. Configurar Supabase para formularios
3. Personalizar contenido (nombres, textos, etc.)
4. Agregar integración de calendario para citas
5. Configurar analytics

## 🎯 Secciones Implementadas

- ✅ Hero Section con video/imagen de fondo
- ✅ Diferenciación (4 características premium)
- ✅ Tratamientos (grid editorial)
- ✅ Antes/Después (slider premium)
- ✅ Equipo (perfil profesional)
- ✅ Proceso (5 pasos)
- ✅ Testimonios (grid de opiniones)
- ✅ Certificaciones
- ✅ Formulario de contacto

## 📄 Licencia

Proyecto privado - Microcapilar Montero

