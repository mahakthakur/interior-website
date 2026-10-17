/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabKey } from './components/BottomNav';
import { HomeScreen } from './screens/HomeScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';
import { CaseStudyScreen } from './screens/CaseStudyScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { ConsultScreen } from './screens/ConsultScreen';
import { MaterialDrawer } from './components/MaterialDrawer';
import { SearchModal } from './components/SearchModal';
import { MenuDrawer } from './components/MenuDrawer';
import { ClientPortalModal } from './components/ClientPortalModal';
import { MaterialSwatch } from './data/projects';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabKey>('home');
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string>('kyoto-residence');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialSwatch | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleOpenCaseStudy = (projectId: string) => {
    setSelectedCaseStudyId(projectId);
    setCurrentTab('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    setCurrentTab('consult');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c1c18] flex flex-col font-sans-body selection:bg-[#e0e5cc] selection:text-[#191d0e]">
      {/* Fixed Top Header */}
      <Header
        currentTab={currentTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Screen Content */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-[#fcf9f2]">
        {currentTab === 'home' && (
          <HomeScreen
            onSelectTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCaseStudy={handleOpenCaseStudy}
            onSelectMaterial={(material) => setSelectedMaterial(material)}
          />
        )}

        {currentTab === 'portfolio' && (
          <PortfolioScreen
            onOpenCaseStudy={handleOpenCaseStudy}
            onBookConsultation={handleBookConsultation}
          />
        )}

        {currentTab === 'case-study' && (
          <CaseStudyScreen
            initialProjectId={selectedCaseStudyId}
            onBookConsultation={handleBookConsultation}
          />
        )}

        {currentTab === 'services' && (
          <ServicesScreen onBookConsultation={handleBookConsultation} />
        )}

        {currentTab === 'consult' && <ConsultScreen />}
      </main>

      {/* Fixed Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      {/* Interactive Modals & Drawers */}
      <MaterialDrawer
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onBookConsultation={handleBookConsultation}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenProject={handleOpenCaseStudy}
        onSelectMaterial={(mat) => setSelectedMaterial(mat)}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      <ClientPortalModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onBookConsultation={handleBookConsultation}
      />
    </div>
  );
}
