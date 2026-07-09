interface SkillTagProps {
  name: string;
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="skill-tag">
      {name}
    </span>
  );
}
