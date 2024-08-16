import Footer from './components/footer/Footer';
import GradientContainer from './components/general/GradientContainer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import './styles/Base.css';

function App() {

    return (
        <div>
            <GradientContainer gradient="bg-gradient-to-t">
                <Navbar />
                <Hero />
            </GradientContainer>
            <GradientContainer gradient="bg-gradient-to-b">
                <Portfolio />
                <Footer />
            </GradientContainer>
            
        </div>
    );
}

export default App
