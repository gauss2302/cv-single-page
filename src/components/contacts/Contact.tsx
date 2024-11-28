

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link: string;
}

const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: '/icons/contacts/github.svg',
      title: 'GitHub',
      value: '@gauss2302',
      link: 'https://github.com/gauss2302'
    },
    {
      icon: '/icons/contacts/tg.svg',
      title: 'Telegram',
      value: '@nick230296',
      link: 'https://t.me/nick230296'
    },
    {
      icon: '/icons/contacts/gmail.svg',
      title: 'Email',
      value: 'shilov6865@gmail.com',
      link: 'mailto:shilov6865@gmail.com'
    },
    {
      value: '+86 132 6820 8154',
      icon: '/icons/contacts/whatapp.svg',
      title: 'WhatsApp',
      link: 'https://wa.me/8613268208154'
    },
    {
      icon: '/icons/contacts/phone.svg',
      title: 'Phone',
      value: '+998 500073405',
      link: 'tel:+998 500073405'
    },
    {
      icon: '/icons/contacts/leet.svg',
      title: 'LeetCode',
      value: '@shilov6865',
      link: 'https://leetcode.com/u/shilov6865/'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Feel free to reach out!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={method.icon} 
                  alt={method.title}
                  className="w-11 h-11 object-contain filter invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-300">{method.value}</p>
            </a>
          ))}
        </div>

 
      </div>
    </section>
  );
};

export default Contact;