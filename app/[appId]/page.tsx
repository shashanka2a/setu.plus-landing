import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAppById } from '@/data/apps';
import { AppLandingPage } from '@/components/AppLandingPage';

interface PageProps {
  params: Promise<{ appId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { appId } = await params;
  const app = getAppById(appId);

  if (!app) {
    return {
      title: 'App Not Found | Setu.plus',
    };
  }

  return {
    title: `${app.name} - ${app.tagline} | Setu.plus`,
    description: app.description,
    keywords: [app.name, app.tagline, 'Setu.plus', 'ONDC', 'Digital India'],
    openGraph: {
      title: `${app.name} - ${app.tagline}`,
      description: app.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${app.name} - ${app.tagline}`,
      description: app.description,
    },
  };
}

export default async function AppPage({ params }: PageProps) {
  const { appId } = await params;
  const app = getAppById(appId);

  if (!app) {
    notFound();
  }

  return <AppLandingPage app={app} />;
}

