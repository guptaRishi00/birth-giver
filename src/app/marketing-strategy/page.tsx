import CTASection from "@/components/CTASection";

export default function MarketingStrategyPage() {
  return (
    <div className="w-full">
      {/* Video Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/marketing.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Marketing & Strategy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive marketing solutions to maximize your project's reach
              and impact across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Traditional vs Digital Marketing */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Marketing Approaches
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Traditional Marketing */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  Traditional Marketing
                </h3>
                <p className="text-gray-600 mb-6">
                  Traditional marketing includes offline methods that have been
                  used for decades, such as:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    Print advertisements in newspapers and magazines
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    Television and radio commercials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    Billboards and signage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    Direct mail campaigns
                  </li>
                </ul>
                <p className="text-gray-600">
                  While traditional marketing still has a role, its
                  effectiveness often depends on the target market and industry.
                  For example, print ads may work well for local businesses
                  targeting older demographics, while radio spots might be ideal
                  for reaching commuters.
                </p>
              </div>

              {/* Digital Marketing */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-600">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 mb-6">
                  Digital marketing leverages online platforms and technologies
                  to connect with audiences. Core components include:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mrshrink-0"></span>
                    Social media marketing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mrshrink-0"></span>
                    Search engine optimization (SEO)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mrshrink-0"></span>
                    Email marketing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mrshrink-0"></span>
                    Pay-per-click (PPC) advertising
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mrshrink-0"></span>
                    Content marketing
                  </li>
                </ul>
                <p className="text-gray-600">
                  Digital marketing offers precise targeting, real-time
                  analytics and cost-effective campaigns, making it a
                  cornerstone of modern strategies. It's particularly effective
                  for reaching tech-savvy and younger audiences who spend
                  significant time online.
                </p>
              </div>
            </div>
          </div>

          {/* How to Create a Marketing Strategy */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How to Create a Marketing Strategy
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Developing a robust marketing strategy involves several steps to
              ensure alignment with your business goals and audience needs. Each
              step builds on the previous one, creating a cohesive and
              actionable plan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Conduct Market Research",
                  description:
                    "Market research provides insights into customer preferences, behaviors and trends. Use surveys, focus groups and online tools to gather data that will inform your strategy.",
                },
                {
                  number: "2",
                  title: "Identify Goals",
                  description:
                    "Define clear, measurable objectives, such as increasing website traffic by 20% or boosting social media engagement by 30%. Align these goals with your overall business vision.",
                },
                {
                  number: "3",
                  title: "Define Target Audience",
                  description:
                    "Understand your ideal customer by creating detailed personas that include demographics, preferences, pain points and purchasing behavior.",
                },
                {
                  number: "4",
                  title: "Analyze Your Market and Competitors",
                  description:
                    "Examine your industry landscape to identify opportunities and threats. Study competitors' strengths and weaknesses to differentiate your approach.",
                },
                {
                  number: "5",
                  title: "Determine Your Unique Value Proposition (UVP)",
                  description:
                    "Your UVP is what sets your business apart from competitors. Highlight what makes your products or services unique and why customers should choose you.",
                },
                {
                  number: "6",
                  title: "Set Your Marketing Budget",
                  description:
                    "Allocate resources effectively by determining how much to spend on various channels and initiatives. Factor in both short-term and long-term goals.",
                },
                {
                  number: "7",
                  title: "Develop Your Content and Messaging",
                  description:
                    "Create compelling content that resonates with your audience. Ensure consistency in your tone, style and brand message across all platforms.",
                },
                {
                  number: "8",
                  title: "Implement and Launch Campaigns",
                  description:
                    "Execute your marketing plan through coordinated campaigns. Use project management tools to ensure timely delivery and collaboration.",
                },
                {
                  number: "9",
                  title: "Monitor and Measure Performance",
                  description:
                    "Track KPIs such as conversion rates, customer acquisition cost (CAC) and ROI. Use analytics tools to adjust and optimize your strategy.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Marketing Strategies for 2025 */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Top Marketing Strategies for 2025
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              The marketing landscape in 2025 is shaped by technology, changing
              consumer behaviors and a growing emphasis on personalization. Here
              are the top 10 strategies and trends to incorporate:
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Embracing Artificial Intelligence (AI) in Marketing",
                  description:
                    "AI is transforming marketing by automating processes, enhancing personalization and analyzing large datasets. Tools powered by AI can predict customer behavior, optimize ad placements, and generate dynamic content.",
                },
                {
                  title: "Leveraging Data Analytics for Decision-Making",
                  description:
                    "Data-driven marketing enables businesses to make informed decisions. Analyze customer data to identify trends, optimize campaigns and personalize experiences using tools like Google Analytics and CRM platforms.",
                },
                {
                  title: "Content Marketing Evolution",
                  description:
                    "Content remains king, but the approach is changing. Focus on interactive content, long-form articles, user-generated content, and repurposing old content into something with greater relevance and value.",
                },
                {
                  title: "Social Media Strategies",
                  description:
                    "Social media continues to be a powerful marketing channel. Prioritize short-form video content, collaborations with micro-influencers, and engaging stories and live streams.",
                },
                {
                  title: "Video Marketing",
                  description:
                    "Video marketing remains one of the most effective ways to capture attention. Consider behind-the-scenes footage, tutorials, how-to videos, and shoppable videos to drive conversions.",
                },
                {
                  title: "Voice Search Optimization",
                  description:
                    "With the rise of voice assistants, optimizing for voice search is crucial. Use conversational language, target long-tail keyword phrases and structure content to answer common questions.",
                },
                {
                  title: "Sustainability and Social Responsibility",
                  description:
                    "Consumers increasingly prefer brands that align with their values. Highlight your brand's positive impact through transparent supply chains, eco-friendly packaging, and community involvement initiatives.",
                },
                {
                  title: "Augmented Reality (AR) and Virtual Reality (VR)",
                  description:
                    "AR and VR technologies create immersive experiences. Examples include virtual product try-ons, interactive brand experiences, and AR-based games and apps.",
                },
                {
                  title: "Personalization and Customer Segmentation",
                  description:
                    "Tailor your marketing efforts by segmenting your audience based on behavior, demographics and preferences. Use personalized emails, product recommendations and dynamic web content.",
                },
                {
                  title: "Omnichannel Marketing Integration",
                  description:
                    "Consistency across all touchpoints is critical. Integrate online and offline channels to provide a unified customer experience, connecting in-store promotions with email campaigns and using QR codes.",
                },
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
