import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <Routes>
            <Route path="/" element={<BlogPostsPage />} />
            <Route path="/post/:id" element={<IndividualPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
