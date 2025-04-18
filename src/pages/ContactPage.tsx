
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, Send, Phone, Mail, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Veuillez entrer votre nom.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(1, {
    message: "Veuillez entrer un sujet.",
  }),
  message: z.string().min(10, {
    message: "Votre message doit contenir au moins 10 caractères.",
  }),
});

const ContactPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [voiceMessage, setVoiceMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording logic would go here in a real implementation
      setIsRecording(false);
      setVoiceMessage("Message vocal enregistré (00:" + recordingTime + "s)");
    } else {
      // Start recording logic would go here in a real implementation
      setIsRecording(true);
      setRecordingTime(0);
      setVoiceMessage(null);
      
      // Simulate recording time increase
      const timer = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= 60) {
            clearInterval(timer);
            setIsRecording(false);
            setVoiceMessage("Message vocal enregistré (01:00)");
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    console.log(values);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.");
      form.reset();
      setVoiceMessage(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-earth-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-earth-900 mb-6">Envoyez-nous un message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Dupont" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sujet</FormLabel>
                        <FormControl>
                          <Input placeholder="Demande d'informations" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Votre message ici..." 
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Ou envoyez un message vocal</p>
                    <div className="flex items-center space-x-4">
                      <Button 
                        type="button" 
                        variant={isRecording ? "destructive" : "outline"}
                        size="icon"
                        onClick={toggleRecording}
                      >
                        {isRecording ? <MicOff /> : <Mic />}
                      </Button>
                      
                      <div className="text-sm">
                        {isRecording ? (
                          <span className="text-red-500 animate-pulse">
                            Enregistrement en cours... {recordingTime}s
                          </span>
                        ) : voiceMessage ? (
                          <span className="text-green-600">{voiceMessage}</span>
                        ) : (
                          <span className="text-earth-600">Cliquez pour enregistrer un message vocal</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brick-600 hover:bg-brick-700"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-earth-900 mb-6">Informations de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-earth-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-brick-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900">Adresse</h3>
                      <p className="text-earth-600">
                        Akodessewa, Après les rails, non loin de la station d'essence CM, Lomé.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-earth-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-brick-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900">Téléphone</h3>
                      <p className="text-earth-600">(+228) 90 96 49 93 / 99 87 01 95</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-earth-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-brick-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900">Email</h3>
                      <p className="text-earth-600">contact@cornerstonebriques.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8416921767493!2d1.2235383!3d6.1476665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDgnNTEuNiJOIDHCsDEzJzI0LjciRQ!5e0!3m2!1sfr!2stg!4v1650223376278!5m2!1sfr!2stg" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Carte Google Maps"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
