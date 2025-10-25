// Example API route - feel free to replace this with your actual API logic
import { NextResponse } from 'next/server';

const industries = [
  "Artificial Intelligence Consulting",
  "Renewable Energy Solutions",
  "Personalized Education Platforms",
  "Sustainable Agriculture Technologies",
  "Biotechnology & Healthcare Innovations"
];

export async function GET() {
  try {
    const randomIndex = Math.floor(Math.random() * industries.length);
    const industry = industries[randomIndex];
    return NextResponse.json({ industry });
  } catch (error) {
    console.error('Error fetching industry:', error);
    return NextResponse.json({ error: 'Failed to fetch industry' }, { status: 500 });
  }
}
