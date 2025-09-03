# No-Face Video Profits Sales Page

## Overview

This is a Flask-based sales landing page for "No-Face Video Profits," a digital product that teaches users how to make money online without showing their face on camera. The application is designed as a conversion-focused sales page with multiple call-to-action buttons leading to a Kiwify payment processor. The page features a hero section with video placeholder, product pricing, benefits, testimonials, and results sections - all optimized for mobile responsiveness and user conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask for server-side rendering
- **Styling**: Pure CSS with custom styling, no frameworks used for clean, lightweight code
- **JavaScript**: Vanilla JavaScript for interactive features including smooth scrolling, CTA tracking, and video interaction monitoring
- **Responsive Design**: Mobile-first approach using CSS media queries
- **Color Scheme**: Dark theme with primary colors - dark blue (#0A0F2C), purple (#6A0DAD), and black background

### Backend Architecture
- **Framework**: Flask (Python) - minimal setup for serving static sales page
- **Session Management**: Flask sessions with configurable secret key from environment variables
- **Routing**: Single route serving the main sales page template
- **Development Setup**: Debug mode enabled for development with host configuration for Replit deployment

### File Structure
- **Entry Points**: Both `app.py` and `main.py` serve as application entry points
- **Templates**: HTML templates stored in `/templates/` directory following Flask conventions
- **Static Assets**: CSS and JavaScript files organized in `/static/` directory
- **Content Management**: Sales page content and requirements documented in attached assets

### Design Patterns
- **MVC Pattern**: Clear separation with Flask handling routing, templates for views, and minimal controller logic
- **Static Site Approach**: Optimized for fast loading with minimal server-side processing
- **Conversion Optimization**: Multiple CTA buttons throughout the page, urgency elements, and social proof sections

## External Dependencies

### Third-Party Services
- **Payment Processor**: Kiwify payment gateway (https://pay.kiwify.com/0FtTjLR) for handling transactions
- **CDN**: CloudFlare CDN for FontAwesome icons (version 6.4.0)
- **Placeholder Services**: Via.placeholder.com for temporary images and video thumbnails

### Frontend Libraries
- **FontAwesome**: Icon library loaded via CDN for UI elements and visual enhancements
- **No CSS Frameworks**: Intentionally avoiding Bootstrap/Tailwind for custom, lightweight styling

### Development Dependencies
- **Flask**: Python web framework for serving the application
- **Environment Variables**: SESSION_SECRET for Flask session management with fallback defaults

### Media Assets
- **Video Content**: Placeholder for Video Sales Letter (VSL) to be uploaded later
- **Images**: Placeholder images for testimonials, results, and product demonstrations
- **Content**: Sales copy and structure defined in attached markdown files