// utils/recommendations.ts
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

const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
  const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
  const normB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
  return dotProduct / (normA * normB);
};

export const getRecommendations = async (userId: string): Promise<Opportunity[]> => {
  const userDoc = await getDoc(doc(db, 'users', userId));
  const userSkills: number[] = userDoc.data()?.skills;

  const opportunitiesSnapshot = await getDocs(collection(db, 'opportunities'));
  const opportunities: Opportunity[] = opportunitiesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Opportunity[];

  const recommendations = opportunities.map(opportunity => {
    const similarityScore = cosineSimilarity(userSkills, opportunity.requiredSkills);
    return { ...opportunity, score: similarityScore };
  });

  return recommendations.sort((a, b) => b.score! - a.score!);
};
