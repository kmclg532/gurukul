import React from 'react';
import MainLayout from '../components/MainLayout';
import HeroSection from '../components/HeroSection';
import DepartmentsSection from '../components/DepartmentsSection';
import AcademicLevelsSection from '../components/AcademicLevelsSection';
import WhyStudySection from '../components/sections/WhyStudySection';
import StatsSection from '../components/sections/StatsSection';
import AboutSection from '../components/sections/AboutSection';
import UpdatesSection from '../components/sections/UpdatesSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <MainLayout>
      <main>
        {/* Hero Section with cinematic image slider */}
        <HeroSection />

        {/* Departments Section */}
        <DepartmentsSection />

        {/* Academic Levels Section */}
        <AcademicLevelsSection />

        {/* Why Study at Gurukul */}
        <WhyStudySection />

        {/* Stats Section */}
        <StatsSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Circulars & Updates Section */}
        <UpdatesSection />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Contact Us Section */}
        <ContactSection />
      </main>
    </MainLayout>
  );
};

export default Home;
