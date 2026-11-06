import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Send, ShieldCheck, Gift, Calendar, MapPin, Package } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { siteConfig } from '../../data/siteConfig';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit WhatsApp number'),
  email: z.string().email('Please enter a valid email address'),
  occasion: z.enum([
    'Personal & Family Enjoyment',
    'Farali Fasting (Ekadashi / Navratri)',
    'Temple Puja Bhog & Prasad',
    'Diwali & Festive Gifting',
    'Wedding Return Gifts & Favors',
    'Corporate Gifting Hampers',
  ]),
  preferredPack: z.enum([
    '250g Gift Box (₹130 • 8-10 Slices)',
    '500g Gift Box (₹260 • 16-20 Slices)',
    '1kg Royal Gift Box (₹519 • 32-40 Slices)',
    'Bulk Order (5kg to 25kg+)',
    'Custom Mixed Gifting Hamper',
  ]),
  quantity: z.string().min(1, 'Please select or enter quantity'),
  city: z.string().min(2, 'Please enter delivery city & pincode'),
  deliveryDate: z.string().optional(),
  message: z.string().min(5, 'Please provide details about your order requirement or delivery deadline'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export const InquiryForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<InquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      occasion: 'Personal & Family Enjoyment',
      preferredPack: '500g Gift Box (₹260 • 16-20 Slices)',
      quantity: '1 Box',
    },
  });

  const onSubmit = (data: InquiryFormData) => {
    setSubmissionData(data);
    setIsSubmitted(true);

    // Format dedicated Kopra Pak WhatsApp message
    const lines = [
      `🍬 *KOPRA PAK ORDER INQUIRY - BHAGVAT PRASADAM*`,
      `────────────────────────`,
      `👤 *Name:* ${data.fullName}`,
      `📱 *WhatsApp:* ${data.phone}`,
      `📧 *Email:* ${data.email}`,
      `📍 *Delivery City & PIN:* ${data.city}`,
      `🎉 *Occasion:* ${data.occasion}`,
      `📦 *Selected Pack:* ${data.preferredPack}`,
      `🔢 *Number of Boxes:* ${data.quantity}`,
      data.deliveryDate ? `🗓️ *Required By:* ${data.deliveryDate}` : null,
      `📝 *Notes/Requirements:* ${data.message}`,
      `────────────────────────`,
      `✨ *Quality:* 100% Pure Premium Ghee & Fresh Milk Mawa`,
      `🌐 Sent via koprapak.in`,
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  if (isSubmitted && submissionData) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-light-beige text-center space-y-5 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-primary/20 text-deep-brown flex items-center justify-center mx-auto border border-primary/40">
          <CheckCircle2 className="w-8 h-8 text-deep-brown" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-deep-brown">
          Kopra Pak Inquiry Received!
        </h3>
        <p className="text-muted-text text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-deep-brown">{submissionData.fullName}</strong>. We have opened WhatsApp with your Kopra Pak order summary. If WhatsApp did not launch automatically, click the button below to connect with our sweet master:
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hello! I submitted a Kopra Pak inquiry for ${submissionData.preferredPack} (Qty: ${submissionData.quantity}) to be delivered to ${submissionData.city}. Name: ${submissionData.fullName}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-3 rounded-full text-sm font-bold shadow-sm transition-transform active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Open WhatsApp Chat Now</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              reset();
            }}
            className="px-6 py-3 rounded-full border border-light-beige text-xs font-semibold text-deep-brown hover:bg-cream transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-light-beige shadow-sm space-y-5"
      noValidate
    >
      <div className="border-b border-light-beige pb-4 mb-2">
        <span className="font-jost text-xs uppercase tracking-widest text-primary-dark font-bold block mb-1">
          FRESH SATVIK BATCH DISPATCH
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-deep-brown">
          Traditional Kopra Pak Order & Gifting Inquiry
        </h3>
        <p className="text-muted-text text-xs sm:text-sm mt-1 leading-relaxed">
          Handcrafted in 100% Pure Premium Ghee, fresh grated coconut, and milk mawa. Tell us your requirement for personal delivery, temple bhog, or festive gifting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Ramesh Patel"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* WhatsApp / Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            WhatsApp Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            {...register('phone')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.phone ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. ramesh@example.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Delivery City & Pincode */}
        <div>
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-primary-dark" />
            <span>Delivery City & PIN Code *</span>
          </label>
          <input
            id="city"
            type="text"
            placeholder="e.g. Mumbai (400001), Surat (394107)..."
            {...register('city')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.city ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
            }`}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Preferred Pack Size */}
        <div>
          <label htmlFor="preferredPack" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5 flex items-center gap-1">
            <Package className="w-3.5 h-3.5 text-primary-dark" />
            <span>Kopra Pak Packaging *</span>
          </label>
          <select
            id="preferredPack"
            {...register('preferredPack')}
            className="w-full px-4 py-3 rounded-xl border border-light-beige bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-deep-brown font-medium"
          >
            <option value="250g Gift Box (₹130 • 8-10 Slices)">250g Gift Box (₹130 • 8-10 Slices)</option>
            <option value="500g Gift Box (₹260 • 16-20 Slices)">500g Gift Box (₹260 • 16-20 Slices) • Most Popular</option>
            <option value="1kg Royal Gift Box (₹519 • 32-40 Slices)">1kg Royal Gift Box (₹519 • 32-40 Slices)</option>
            <option value="Bulk Order (5kg to 25kg+)">Bulk Order (5kg to 25kg+ for events)</option>
            <option value="Custom Mixed Gifting Hamper">Custom Mixed Gifting Hamper</option>
          </select>
        </div>

        {/* Occasion / Purpose */}
        <div>
          <label htmlFor="occasion" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5 flex items-center gap-1">
            <Gift className="w-3.5 h-3.5 text-primary-dark" />
            <span>Occasion / Purpose</span>
          </label>
          <select
            id="occasion"
            {...register('occasion')}
            className="w-full px-4 py-3 rounded-xl border border-light-beige bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-deep-brown font-medium"
          >
            <option value="Personal & Family Enjoyment">Personal & Family Enjoyment</option>
            <option value="Farali Fasting (Ekadashi / Navratri)">Farali Fasting (Ekadashi / Navratri Vrat)</option>
            <option value="Temple Puja Bhog & Prasad">Temple Puja Bhog & Prasad</option>
            <option value="Diwali & Festive Gifting">Diwali & Festive Celebrations</option>
            <option value="Wedding Return Gifts & Favors">Wedding Return Gifts & Favors</option>
            <option value="Corporate Gifting Hampers">Corporate Gifting Hampers</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
            Number of Boxes / Quantity *
          </label>
          <input
            id="quantity"
            type="text"
            placeholder="e.g. 1 Box, 5 Boxes, 25 Boxes..."
            {...register('quantity')}
            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.quantity ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
            }`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
          )}
        </div>

        {/* Delivery Date */}
        <div>
          <label htmlFor="deliveryDate" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-primary-dark" />
            <span>Needed by (Delivery Deadline)</span>
          </label>
          <input
            id="deliveryDate"
            type="text"
            placeholder="e.g. Before Diwali / This Weekend / Urgent"
            {...register('deliveryDate')}
            className="w-full px-4 py-3 rounded-xl border border-light-beige bg-cream/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Message / Special Notes */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-1.5">
          Special Notes & Instructions *
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Please mention any delivery preferences, custom gift tag messages, or corporate invoice requirements..."
          {...register('message')}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-light-beige bg-cream/30'
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Trust reassurance pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-deep-brown">
        <span className="flex items-center gap-1.5 font-semibold">
          <ShieldCheck className="w-4 h-4 text-primary-dark" />
          100% Pure Premium Ghee & Satvik Preparation
        </span>
        <span className="text-muted-text font-medium">
          20–25 Days Freshness Guaranteed
        </span>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-hover text-deep-brown font-bold text-base py-3.5 px-6 rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
        >
          <Send className="w-4 h-4 text-deep-brown" />
          <span>Send Kopra Pak Inquiry via WhatsApp</span>
        </button>
        <p className="text-center text-xs text-muted-text mt-3">
          Direct inquiry dispatch to Bhagvat Prasadam sweet master. Fast response & pan-India courier shipping.
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;
