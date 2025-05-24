import type { ApiDataInterface, FrameworksInterface } from "@/interfaces/ApiDataInterface";
import { Tooltip } from "@/components/ui/tooltip";

const CATEGORY_CONFIG = {
  langs: {
    bg: "bg-blue-500 hover:bg-blue-600",
    text: "text-blue-600",
    icon: "💻", // Emoji or could use actual icons
    title: "Programming Languages"
  },
  frameworks: {
    bg: "bg-green-500 hover:bg-green-600",
    text: "text-green-700",
    icon: "🛠️",
    title: "Frameworks & Libraries"
  },
  orms: {
    bg: "bg-purple-500 hover:bg-purple-600",
    text: "text-purple-600",
    icon: "🗄️",
    title: "ORMs"
  },
  tools: {
    bg: "bg-yellow-500 hover:bg-yellow-600",
    text: "text-yellow-600",
    icon: "🧰",
    title: "Development Tools"
  },
  cloud: {
    bg: "bg-cyan-500 hover:bg-cyan-600",
    text: "text-cyan-600",
    icon: "☁️",
    title: "Cloud Services"
  },
  databases: {
    bg: "bg-pink-500 hover:bg-pink-600",
    text: "text-pink-600",
    icon: "💾",
    title: "Databases"
  },
  devops: {
    bg: "bg-red-500 hover:bg-red-600",
    text: "text-red-600",
    icon: "🚀",
    title: "DevOps"
  },
} as const;

type TechCategory = keyof typeof CATEGORY_CONFIG;

const TechBadge = ({ tech, colorClass }: { tech: string; colorClass: string }) => (
  //@ts-ignore
  <Tooltip content={tech}>
    <span className={`px-3 py-1 rounded-full text-sm text-white ${colorClass} transition-colors duration-200`}>
      {tech}
    </span>
  </Tooltip>
);

const TechCategorySection = ({
  category,
  techs,
  children,
}: {
  category: TechCategory;
  techs: string[];
  children?: React.ReactNode;
}) => {
  const config = CATEGORY_CONFIG[category];
  
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{config.icon}</span>
        <h3 className={`text-lg font-semibold ${config.text}`}>
          {config.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {/* Render badges apenas se não houver children */}
        {!children && techs.map((tech) => (
          <TechBadge key={tech} tech={tech} colorClass={config.bg} />
        ))}
      </div>
      {/* Render children se houver */}
      {children && <div>{children}</div>}
    </div>
  );
};


const FrameworkSubcategory = ({
  name,
  techs,
}: {
  name: string;
  techs: string[];
}) => (
  <div className="mb-3 ml-4">
    <p className="font-medium italic text-gray-700 capitalize">{name}</p>
    <div className="flex flex-wrap gap-2 mt-1">
      {techs.map((tech) => (
        <TechBadge 
          key={tech} 
          tech={tech} 
          colorClass={CATEGORY_CONFIG.frameworks.bg} 
        />
      ))}
    </div>
  </div>
);

const FrameworksSection = ({
  frameworks,
}: {
  frameworks: FrameworksInterface;
}) => {
  if (!frameworks) return null;

  const config = CATEGORY_CONFIG.frameworks;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{config.icon}</span>
        <h3 className={`text-lg font-semibold ${config.text}`}>
          {config.title}
        </h3>
      </div>

      <div className="ml-4">
        {Object.entries(frameworks).map(([category, subcats]) => (
          <div key={category} className="mb-4">
            <h4 className="font-bold text-md capitalize mb-2">{category}</h4>
            {Object.entries(subcats).map(([subcatName, techs]) =>
              Array.isArray(techs) ? (
                <FrameworkSubcategory
                  key={subcatName}
                  name={subcatName}
                  techs={techs}
                />
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default function TechStack({ techs }: { techs: ApiDataInterface["techs"] }) {
  if (!techs) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No technical skills registered at the moment.
        </p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {(Object.keys(CATEGORY_CONFIG) as TechCategory[]).map((category) => {
          if (category === 'frameworks') {
            return techs.frameworks ? (
              <FrameworksSection key={category} frameworks={techs.frameworks} />
            ) : null;
          }
          
          const categoryTechs = techs[category];
          return categoryTechs ? (
            <TechCategorySection
              key={category}
              category={category}
              techs={categoryTechs}
            />
          ) : null;
        })}
      </div>
    </section>
  );
}