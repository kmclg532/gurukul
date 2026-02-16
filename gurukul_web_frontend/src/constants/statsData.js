import { BookOpen, Users, School, UserCheck } from 'lucide-react';

const statsData = [
  {
    id: 1,
    value: 25,
    suffix: '+',
    label: 'Subjects',
    description: 'Diverse curriculum across streams',
    icon: BookOpen,
    highlight: false,
  },
  {
    id: 2,
    value: 2200,
    suffix: '+',
    label: 'Students',
    description: 'Currently enrolled across all programs',
    icon: Users,
    highlight: true,
  },
  {
    id: 3,
    value: 80,
    suffix: '+',
    label: 'Classrooms',
    description: 'Modern & well-equipped learning spaces',
    icon: School,
    highlight: false,
  },
  {
    id: 4,
    value: 150,
    suffix: '+',
    label: 'Faculties',
    description: 'Experienced & dedicated educators',
    icon: UserCheck,
    highlight: true,
  },
];

export default statsData;
