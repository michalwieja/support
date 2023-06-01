export const SectionTitle = ({title,subtitle}) => (
  <div className="section-title">
    {title && <div className="section-title__title">{title}</div>}
    {subtitle && <div className="section-title__subtitle">{subtitle}</div>}
  </div>
);
