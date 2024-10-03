import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    next.handle(req).subscribe({
      next: (event) => {
        if (event instanceof HttpResponse) {
          // Ici, tu peux gérer la réponse
          console.log('Réponse reçue:', event);
          const message = event.body?.message; // Suppose que la réponse contient un champ "message"
          if (message) {
            alert(message); // Affiche le message
          }
        }
      },
      error: (error) => {
        console.error('Erreur lors de la requête:', error);
        alert('Une erreur est survenue lors de la requête.'); // Message d'erreur
      }
    });
    console.log('requete rsqgfsde:', req);
    return next.handle(req)
  }
  }

  