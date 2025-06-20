"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TabNewsPost {
  id: string;
  owner_id: string;
  parent_id: string | null;
  slug: string;
  title: string;
  body: string;
  status: string;
  source_url: string | null;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: string | null;
  tabcoins: number;
  owner_username: string;
  children_deep_count: number;
}

export default function TabNewsPosts() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<TabNewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://www.tabnews.com.br/api/v1/contents/reesearch64"
        );

        if (!response.ok) {
          throw new Error(t("tabNews.fetchError"));
        }

        const data = await response.json();
        
        const reversedData = [...data].reverse().slice(0, 3);
        setPosts(reversedData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t("tabNews.unknownError")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [t]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <Button variant="outline" onClick={() => window.location.reload()}>
          {t("tabNews.retry")}
        </Button>
      </div>
    );
  }

  if (posts.length === 0) {
    return <p className="text-center py-8">{t("tabNews.noPosts")}</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{t("tabNews.title")}</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`https://www.tabnews.com.br/${post.owner_username}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>@{post.owner_username}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.tabcoins} tabcoins</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">
                {post.body
                  ? post.body.replace(/[#*`]/g, "").substring(0, 200) + "..."
                  : t("tabNews.noContent")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline">
          <Link
            href="https://www.tabnews.com.br/reesearch64"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("tabNews.viewAll")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
