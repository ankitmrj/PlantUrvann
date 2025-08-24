# PlantStore - Full-Stack Plant Store Application

A modern, responsive plant store application built with React, TypeScript, and Tailwind CSS. Features a comprehensive catalog of 50+ plants with advanced search, filtering, and admin capabilities.

## 🌟 Features

### Plant Catalog
- **50+ Plants**: Comprehensive database with realistic plant data including names, prices, categories, and care information
- **Responsive Grid**: Beautiful card-based layout that works on all devices
- **Rich Plant Data**: Each plant includes description, difficulty level, light/water requirements, and high-quality images

### Search & Filter
- **Smart Search**: Search by plant name, category keywords, or description
- **Multi-Category Filtering**: Filter by categories like Indoor, Outdoor, Succulent, Herb, etc.
- **Advanced Sorting**: Sort by name (A-Z) or price (low to high, high to low)
- **Real-time Results**: Instant search with debounced input for optimal performance

### Admin Features
- **Add Plant Form**: Comprehensive form with validation for adding new plants
- **Multi-Category Support**: Select from existing categories or add custom ones
- **Form Validation**: Prevents invalid submissions with clear error messages
- **Stock Management**: Track inventory levels and availability

### User Experience
- **Loading States**: Beautiful skeleton screens during data fetching
- **Error Handling**: Graceful error messages with retry options
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Modular Architecture**: Clean separation of concerns with custom hooks and services
- **Mock API**: Simulated backend with realistic delays and responses
- **Performance Optimized**: Efficient rendering and state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd plant-store
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── common/          # Reusable components
│   ├── AddPlantForm.tsx # Admin form for adding plants
│   ├── Header.tsx       # Navigation header
│   ├── PlantCard.tsx    # Individual plant display
│   ├── PlantGrid.tsx    # Grid layout for plants
│   ├── SearchBar.tsx    # Search and filter controls
│   └── Stats.tsx        # Statistics dashboard
├── data/                # Static data
│   └── plants.ts        # Plant database
├── hooks/               # Custom React hooks
│   └── usePlants.ts     # Plant data management
├── services/            # API services
│   └── plantService.ts  # Plant API simulation
├── types/               # TypeScript definitions
│   └── index.ts         # Type definitions
└── App.tsx              # Main application component
```

## 🎨 Design System

### Colors
- **Primary**: Emerald (`#10B981`) - Main brand color
- **Secondary**: Nature-inspired earth tones
- **Status Colors**: Success (green), warning (yellow), error (red)
- **Neutrals**: Comprehensive gray scale for text and backgrounds

### Typography
- **Primary Font**: System font stack for optimal performance
- **Hierarchy**: Clear heading levels with consistent spacing
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **8px Grid System**: Consistent spacing throughout the application
- **Responsive Breakpoints**: Mobile-first design with tablet and desktop variants

## 📱 Responsive Design

The application is fully responsive with three main breakpoints:
- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two-column grid
- **Desktop**: > 1024px - Multi-column grid with full features

## 🔧 API Simulation

The application includes a complete mock API service that simulates:
- **GET /plants** - Retrieve all plants
- **POST /plants/search** - Search and filter plants
- **POST /plants** - Add new plant (admin)

All endpoints include realistic delays and error handling to simulate real-world conditions.

## 🧪 Testing

The application includes comprehensive error handling and loading states. To test different scenarios:

1. **Loading States**: Observe skeleton screens during initial load
2. **Search**: Try searching for "succulent", "indoor", or specific plant names
3. **Filtering**: Use category dropdown to filter by plant types
4. **Adding Plants**: Use the "Add Plant" button to test the admin form
5. **Error Handling**: Network errors are gracefully handled with retry options

## 🚀 Production Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
This application can be deployed to various platforms:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **GitHub Pages**: Use GitHub Actions for deployment

### Environment Variables
No environment variables are required for the basic setup. For production deployments with real APIs, configure:
- `VITE_API_URL`: Backend API endpoint
- `VITE_IMAGE_CDN`: Image hosting CDN

## 🔮 Future Enhancements

### Potential Features
- **Shopping Cart**: Complete e-commerce functionality
- **User Authentication**: JWT-based login system  
- **Plant Care Reminders**: Notification system for watering/care
- **Image Upload**: Direct image upload for admin users
- **Reviews & Ratings**: Customer feedback system
- **Wishlist**: Save favorite plants
- **Advanced Analytics**: Sales and inventory reporting

### Technical Improvements
- **Real Backend**: Replace mock API with Node.js/Express backend
- **Database**: Integrate with MongoDB or PostgreSQL
- **Payment Processing**: Stripe/PayPal integration
- **PWA**: Progressive Web App capabilities
- **SEO Optimization**: Server-side rendering with Next.js

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ for plant lovers everywhere** 🌱"# PlantUrvann" 
