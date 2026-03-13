import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Ap 01",
    cover: "https://i.postimg.cc/7ZfZ7p8K/01a-projeto.jpg",
    gallery: [
      "https://i.postimg.cc/7ZfZ7p8K/01a-projeto.jpg",
      "https://i.postimg.cc/K8R8LdS9/01b-projeto.jpg",
      "https://i.postimg.cc/8zjzWqQK/01c-projeto.jpg",
      "https://i.postimg.cc/pLpL8gbq/01d-projeto.jpg"
    ]
  },
  {
    title: "Ap 02",
    cover: "https://i.postimg.cc/2SVSvPRJ/02ba-projeto.jpg",
    gallery: [
      "https://i.postimg.cc/2SVSvPRJ/02ba-projeto.jpg",
      "https://i.postimg.cc/g2n2RfFf/02bb-projeto.jpg",
      "https://i.postimg.cc/6pypRDJg/02bc-projeto.jpg",
      "https://i.postimg.cc/vZcZ9pwF/02bd-projeto.jpg",
      "https://i.postimg.cc/HkRstBTD/02be-projeto.jpg",
      "https://i.postimg.cc/RZyVTX4k/02bf-projeto.jpg",
      "https://i.postimg.cc/CxXL4mwy/02bg-projeto.jpg"
    ]
  },
  {
    title: "Ap 03",
    cover: "https://i.postimg.cc/VkpLFDzJ/04da-projeto.jpg",
    gallery: [
      "https://i.postimg.cc/VkpLFDzJ/04da-projeto.jpg",
      "https://i.postimg.cc/W1Cb7Xsq/04de-projeto.jpg"
    ]
  },
  {
    title: "Ap 04",
    cover: "https://i.postimg.cc/52TNmnfV/03ca-projeto.jpg",
    gallery: [
      "https://i.postimg.cc/52TNmnfV/03ca-projeto.jpg"
    ]
  },
  {
    title: "Ap 05",
    cover: "https://i.postimg.cc/fRpTvBMX/05ea-projeto.jpg",
    gallery: [
      "https://i.postimg.cc/fRpTvBMX/05ea-projeto.jpg",
      "https://i.postimg.cc/wjZTk09h/05eb-projeto.jpg",
      "https://i.postimg.cc/0NS5XDNM/05ec-projeto.jpg",
      "https://i.postimg.cc/MGBZ3VGj/05ed-projeto.jpg"
    ]
  }
];

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (projectIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    const project = projects[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevSlide = () => {
    const project = projects[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentProjectIndex]);

  return (
    <section className="px-6 lg:px-20 py-24 bg-white" id="projetos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2">Portfólio</h2>
          <h3 className="text-4xl font-black mb-4">Projetos em Destaque</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Uma curadoria de espaços que transcendem o convencional, unindo precisão técnica a uma estética atemporal e luxuosa.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          <div className="col-span-2 md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={() => openLightbox(0)}>
            <img alt={projects[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projects[0].cover} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 pointer-events-none">
              <p className="text-white font-bold text-xl">{projects[0].title}</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={() => openLightbox(1)}>
            <img alt={projects[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projects[1].cover} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
              <p className="text-white font-bold text-lg">{projects[1].title}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={() => openLightbox(2)}>
            <img alt={projects[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projects[2].cover} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
              <p className="text-white font-bold text-lg">{projects[2].title}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={() => openLightbox(3)}>
            <img alt={projects[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projects[3].cover} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
              <p className="text-white font-bold text-lg">{projects[3].title}</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg" onClick={() => openLightbox(4)}>
            <img alt={projects[4].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={projects[4].cover} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
              <p className="text-white font-bold text-lg">{projects[4].title}</p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" onClick={closeLightbox}>
            <X className="w-10 h-10" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center">
            {projects[currentProjectIndex].gallery.length > 1 && (
              <button className="absolute left-0 md:-left-16 text-white hover:text-primary transition-colors p-2" onClick={prevSlide}>
                <ChevronLeft className="w-12 h-12" />
              </button>
            )}
            <img className="max-w-full max-h-full rounded-lg shadow-2xl transition-all duration-300 object-contain" src={projects[currentProjectIndex].gallery[currentImageIndex]} alt={`${projects[currentProjectIndex].title} - ${currentImageIndex + 1}`} referrerPolicy="no-referrer" />
            {projects[currentProjectIndex].gallery.length > 1 && (
              <button className="absolute right-0 md:-right-16 text-white hover:text-primary transition-colors p-2" onClick={nextSlide}>
                <ChevronRight className="w-12 h-12" />
              </button>
            )}
          </div>
          <div className="mt-6 text-white text-lg font-medium">{projects[currentProjectIndex].title}</div>
          {projects[currentProjectIndex].gallery.length > 1 && (
            <div className="mt-4 text-white/50 text-sm">{currentImageIndex + 1} / {projects[currentProjectIndex].gallery.length}</div>
          )}
        </div>
      )}
    </section>
  );
}
