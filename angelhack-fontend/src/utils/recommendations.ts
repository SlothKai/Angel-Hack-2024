import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

interface Opportunity {
  id: string;
  category: string;
  company: string;
  currentVolunteer: number;
  maxVolunteer: number;
  description: string;
  requiredSkills: number[];
  score?: number;
}

const skillMatch = (userSkill: number, requiredSkills: number[]): number => {
  return requiredSkills.includes(userSkill) ? 1 : 0;
};

export const getRecommendations = async (userId: string): Promise<Opportunity[]> => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userSkill: number = userDoc.data()?.skill;

  if (userSkill === undefined || userSkill < 1 || userSkill > 3) {
    throw new Error('User skill not found or invalid');
  }

  const opportunitiesSnapshot = await getDocs(collection(db, 'opportunities'));
  const opportunities: Opportunity[] = opportunitiesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Opportunity[];

  const recommendations = opportunities.map(opportunity => {
    const matchScore = skillMatch(userSkill, opportunity.requiredSkills);
    return { ...opportunity, score: matchScore };
  });

  return recommendations.sort((a, b) => b.score! - a.score!);
};
