import Image from "next/image";
import CTASection from "@/components/CTASection";

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      title: "Custom Web Application Development",
      description:
        "Build powerful, scalable, and secure web applications tailored to your business workflows. Our expert developers create custom solutions that streamline processes and drive growth.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Mobile App Development (iOS & Android)",
      description:
        "Create high-performance native and cross-platform mobile apps for iOS and Android. Our team specializes in Flutter, React Native, and native development for seamless user experiences.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "ERP & CRM Solutions",
      description:
        "Comprehensive ERP and CRM solutions to streamline operations and enhance customer relationships. Customized enterprise systems that improve efficiency and enable data-driven decisions.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "API Development & Integration",
      description:
        "Build robust, secure APIs and integrate third-party services for seamless system communication. Our expert team ensures flawless data exchange and workflow efficiency.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Cloud Solutions & Deployment (AWS, Azure, GCP)",
      description:
        "Cloud-native applications, migration services, and serverless architecture on AWS, Azure, and GCP. Scalable, secure, and cost-effective solutions that reduce IT overhead.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "E-Commerce Platform Development",
      description:
        "Custom e-commerce platforms with secure payment integrations, subscription management, and multi-language support. Feature-rich online stores that drive sales and global reach.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop&crop=center",
    },
    {
      title: "Automation & Workflow Tools",
      description:
        "Custom automation tools, RPA solutions, and workflow optimization to reduce manual tasks. Save time, minimize errors, and focus your team on strategic initiatives.",
      image:
        "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "UI/UX Design & Prototyping",
      description:
        "Modern, intuitive UI/UX design and prototyping services. User-centered design principles create clean, beautiful interfaces that deliver exceptional user experiences.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/coding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Software & Development
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive software development solutions that transform your
              business ideas into powerful digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From web applications to mobile apps, cloud solutions to
              automation tools, we deliver cutting-edge technology solutions
              that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
