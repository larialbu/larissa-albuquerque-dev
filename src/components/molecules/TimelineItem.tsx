interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  descriptionHtml?: string;
}

export function TimelineItem({ date, title, subtitle, descriptionHtml }: TimelineItemProps) {
  return (
    <div className="timeline-item card">
      <div className="timeline-header">
        <strong>{title}</strong>
        <span className="date">{date}</span>
      </div>
      <em>{subtitle}</em>
      {descriptionHtml && (
        <p style={{ marginTop: '12px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: descriptionHtml }}></p>
      )}
    </div>
  );
}
