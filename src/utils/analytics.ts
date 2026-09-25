/**
 * Analytics and Conversion Tracking utility for Dra. Ana Camila Cordeiro - Psicóloga
 * Dispatches conversion events to Google Analytics (gtag), Google Ads (AW),
 * Meta Pixel (fbq), and standard custom DOM events.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Tracks WhatsApp click conversions across marketing platforms
 * @param label Description of the button or section where the conversion was triggered
 */
export function trackWhatsAppConversion(label: string = "WhatsApp CTA"): void {
  try {
    // 1. Google Analytics 4 (GA4) / Google Ads (gtag)
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Custom event for Google Ads conversion
      window.gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/label",
        event_category: "Conversion",
        event_label: label,
      });

      // Standard GA4 recommended event for lead generation
      window.gtag("event", "generate_lead", {
        event_category: "Engagement",
        event_label: label,
        method: "WhatsApp",
      });
    }

    // 2. Meta Pixel (Facebook / Instagram Ads)
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Contact", {
        content_name: label,
        status: "initiated",
      });
      window.fbq("trackCustom", "WhatsAppClick", {
        label,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Custom DOM Event for custom tag managers / testing
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("whatsapp_conversion", {
          detail: {
            label,
            timestamp: Date.now(),
          },
        })
      );
    }
  } catch (error) {
    // Silent fail in case tracking scripts are blocked by adblockers
    console.debug("[Analytics] Conversion event dispatched:", label);
  }
}
