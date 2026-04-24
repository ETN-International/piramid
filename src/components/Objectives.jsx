import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe2, Lightbulb, GraduationCap, Building2, Share2, ShieldCheck, UserCheck } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integration & Inclusion",
      desc: "Promote integration, inclusion and well-being in intercultural contexts."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Intercultural Dialogue",
      desc: "Encourage and activate intercultural dialogue and intercultural skills."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovative Methods",
      desc: "Experiment innovative methodologies and tools for skill acquisition."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "VET Teaching",
      desc: "Increase and improve the recognition of intercultural competences in teachers."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Company Awareness",
      desc: "Allow tourism companies to disseminate project results internally and externally."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Cooperation",
      desc: "Strengthen cooperation between target groups and partners from different countries."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "European Dimension",
      desc: "Strengthen the European dimension to become responsible future citizens."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Skill Recognition",
      desc: "Improve intercultural, linguistic, and social skills through project activities."
    }
  ];

  return (
    <section id="objectives" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Objectives</h2>
          <p className="text-lg text-slate-600">
            The P.IR.A.M.iD project is built on a foundation of integration and skill development 
            within the European tourism sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-eu-blue/10 rounded-xl flex items-center justify-center text-eu-blue group-hover:bg-eu-blue group-hover:text-white transition-colors mb-6">
                {obj.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{obj.title}</h3>
              <p className="text-slate-600 leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
