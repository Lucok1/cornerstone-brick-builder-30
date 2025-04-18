
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mic, Upload, PaperclipIcon, Send, X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface QuoteRequestForm {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
  files?: FileList;
}

interface QuoteRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteRequestDialog = ({ open, onOpenChange }: QuoteRequestDialogProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteRequestForm>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    // Check file size limit (100MB)
    const totalSize = Array.from(files).reduce((acc, file) => acc + file.size, 0);
    const MAX_SIZE = 100 * 1024 * 1024; // 100MB in bytes
    
    if (totalSize > MAX_SIZE) {
      toast.error("Les fichiers dépassent la limite de 100MB");
      return;
    }
    
    setSelectedFiles(Array.from(files));
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];
      
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });
      
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      });
      
      setIsRecording(true);
      mediaRecorder.start();
      
      // Automatically stop recording after 2 minutes
      setTimeout(() => {
        if (mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          setIsRecording(false);
        }
      }, 120000);
      
      // Store the recorder to be able to stop it later
      window.currentRecorder = mediaRecorder;
      
    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error("Impossible d'accéder au microphone");
    }
  };
  
  const stopRecording = () => {
    if (window.currentRecorder && window.currentRecorder.state !== 'inactive') {
      window.currentRecorder.stop();
    }
    setIsRecording(false);
  };

  const onSubmit = async (data: QuoteRequestForm) => {
    // Create form data to handle files and audio
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('projectDescription', data.projectDescription);
    
    selectedFiles.forEach(file => {
      formData.append('files', file);
    });
    
    if (audioBlob) {
      formData.append('audio', audioBlob, 'voice-message.wav');
    }
    
    // Here you would normally send this to your server
    console.log("Form data to submit:", Object.fromEntries(formData));
    
    // For now, just simulate success
    toast.success("Demande de devis envoyée avec succès!");
    onOpenChange(false);
    reset();
    setSelectedFiles([]);
    setAudioBlob(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-brick-600">Demande de Devis</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour recevoir un devis personnalisé pour votre projet de construction.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom Complet</Label>
              <Input 
                id="name" 
                placeholder="Votre nom" 
                {...register('name', { required: 'Le nom est requis' })}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="votre@email.com" 
                {...register('email', { 
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email invalide'
                  }
                })}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input 
                id="phone" 
                placeholder="+228 XX XX XX XX" 
                {...register('phone')}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="files">Documents (PDF, Excel, Images, Vidéos - Max 100MB)</Label>
              <div className="flex items-center space-x-2">
                <Input 
                  id="files" 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.mp4,.avi,.mov"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full flex items-center justify-center"
                  onClick={() => document.getElementById('files')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Sélectionner des fichiers
                </Button>
              </div>
              {selectedFiles.length > 0 && (
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-medium">Fichiers sélectionnés ({selectedFiles.length}):</p>
                  <div className="max-h-24 overflow-y-auto">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <PaperclipIcon className="h-4 w-4 mr-2 text-brick-500" />
                        <span className="truncate">{file.name}</span>
                        <span className="ml-auto text-gray-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Description du Projet</Label>
            <Textarea 
              id="projectDescription" 
              placeholder="Décrivez votre projet en détail..." 
              className="min-h-32"
              {...register('projectDescription', { required: 'La description du projet est requise' })}
            />
            {errors.projectDescription && (
              <p className="text-sm text-red-500">{errors.projectDescription.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label>Message Vocal (Alternative)</Label>
            <div className="flex items-center space-x-2">
              {!audioBlob ? (
                <Button 
                  type="button" 
                  variant={isRecording ? "destructive" : "outline"}
                  className="flex items-center space-x-2"
                  onClick={isRecording ? stopRecording : startRecording}
                >
                  {isRecording ? (
                    <>
                      <X className="h-4 w-4" />
                      <span>Arrêter</span>
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4" />
                      <span>Enregistrer un message vocal</span>
                    </>
                  )}
                </Button>
              ) : (
                <div className="flex-1 flex items-center space-x-2 border rounded-md p-2">
                  <div className="flex-1 flex items-center space-x-2">
                    <Mic className="h-4 w-4 text-brick-500" />
                    <span className="text-sm">Message vocal enregistré</span>
                  </div>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setAudioBlob(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            {isRecording && (
              <p className="text-sm text-brick-500 animate-pulse">
                Enregistrement en cours...
              </p>
            )}
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              className="bg-brick-600 hover:bg-brick-700 text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              Envoyer la demande
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Add type declaration for the MediaRecorder
declare global {
  interface Window {
    currentRecorder?: MediaRecorder;
  }
}

export default QuoteRequestDialog;
