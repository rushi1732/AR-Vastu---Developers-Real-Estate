import { initialProperties, Property } from "@/data/properties";
import { isSupabaseConfigured, supabase } from "./supabase";

export interface EnquiryRecord {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email?: string;
  property_type: string;
  preferred_location: string;
  requirement: "Buy" | "Sell" | "Lease";
  message: string;
  status: "New" | "Contacted" | "Closed";
  property_title?: string;
}

export interface SiteVisitRecord {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  property_name: string;
  preferred_date: string;
  preferred_time: string;
  attendees: number;
  status: "New" | "Confirmed" | "Completed" | "Cancelled";
  notes?: string;
}

const LOCAL_PROPERTIES_KEY = "ar_vastu_custom_properties";
const LOCAL_ENQUIRIES_KEY = "ar_vastu_enquiries";
const LOCAL_SITE_VISITS_KEY = "ar_vastu_site_visits";

export async function getAllProperties(): Promise<Property[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Property[];
      }
    } catch (e) {
      console.warn("Supabase fetch failed, fallback to local:", e);
    }
  }

  // Local storage fallback
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_PROPERTIES_KEY);
      if (stored) {
        const custom = JSON.parse(stored) as Property[];
        return [...custom, ...initialProperties];
      }
    } catch {
      // fallback
    }
  }

  return initialProperties;
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const all = await getAllProperties();
  return all.find((p) => p.slug === slug) || null;
}

export async function saveCustomProperty(property: Property): Promise<boolean> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase.from("properties").insert([property]);
      if (!error) return true;
    } catch (e) {
      console.error("Supabase insert error:", e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_PROPERTIES_KEY);
      const list: Property[] = stored ? JSON.parse(stored) : [];
      list.unshift(property);
      localStorage.setItem(LOCAL_PROPERTIES_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      console.error("Local storage error:", e);
      return false;
    }
  }
  return true;
}

export async function submitEnquiry(enquiry: Omit<EnquiryRecord, "id" | "created_at" | "status">): Promise<{ success: boolean; id: string }> {
  const record: EnquiryRecord = {
    ...enquiry,
    id: "enq_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    created_at: new Date().toISOString(),
    status: "New",
  };

  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase.from("enquiries").insert([record]).select();
      if (!error && data) {
        return { success: true, id: record.id };
      }
    } catch (e) {
      console.warn("Supabase enquiry submit error:", e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_ENQUIRIES_KEY);
      const list: EnquiryRecord[] = stored ? JSON.parse(stored) : [];
      list.unshift(record);
      localStorage.setItem(LOCAL_ENQUIRIES_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Enquiry local save error:", e);
    }
  }

  return { success: true, id: record.id };
}

export async function getAllEnquiries(): Promise<EnquiryRecord[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) return data as EnquiryRecord[];
    } catch (e) {
      console.warn("Supabase fetch enquiries error:", e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_ENQUIRIES_KEY);
      if (stored) return JSON.parse(stored) as EnquiryRecord[];
    } catch {
      // fallback
    }
  }

  return [];
}

export async function updateEnquiryStatus(id: string, status: EnquiryRecord["status"]): Promise<boolean> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
      if (!error) return true;
    } catch (e) {
      console.warn(e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_ENQUIRIES_KEY);
      if (stored) {
        const list: EnquiryRecord[] = JSON.parse(stored);
        const idx = list.findIndex((e) => e.id === id);
        if (idx !== -1) {
          list[idx].status = status;
          localStorage.setItem(LOCAL_ENQUIRIES_KEY, JSON.stringify(list));
          return true;
        }
      }
    } catch {
      // ignore
    }
  }
  return true;
}

export async function submitSiteVisit(visit: Omit<SiteVisitRecord, "id" | "created_at" | "status">): Promise<{ success: boolean; id: string }> {
  const record: SiteVisitRecord = {
    ...visit,
    id: "visit_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    created_at: new Date().toISOString(),
    status: "New",
  };

  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase.from("site_visit_requests").insert([record]);
      if (!error) return { success: true, id: record.id };
    } catch (e) {
      console.warn(e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_SITE_VISITS_KEY);
      const list: SiteVisitRecord[] = stored ? JSON.parse(stored) : [];
      list.unshift(record);
      localStorage.setItem(LOCAL_SITE_VISITS_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }
  }

  return { success: true, id: record.id };
}

export async function getAllSiteVisits(): Promise<SiteVisitRecord[]> {
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from("site_visit_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) return data as SiteVisitRecord[];
    } catch (e) {
      console.warn(e);
    }
  }

  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(LOCAL_SITE_VISITS_KEY);
      if (stored) return JSON.parse(stored) as SiteVisitRecord[];
    } catch {
      // fallback
    }
  }

  return [];
}
