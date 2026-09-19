const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">

        <span className="h-2 w-2 rounded-full bg-cyan-400" />

        <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
          {eyebrow}
        </span>

      </div>

      <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">

        {title}

        {highlight && (
          <span className="block text-cyan-400">
            {highlight}
          </span>
        )}

      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;