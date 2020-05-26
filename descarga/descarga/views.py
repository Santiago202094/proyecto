from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context
from pytube import YouTube
from django.http import JsonResponse
import pytube

def downloadvideo(request):     
    return render(request,'formulario.html')
   
def download(request):
        if request.method == 'GET':
           str=request.GET['link']
           str[-11:]        
        return render(request,'formulario.html',{"luego":str[-11:],"desg":request.GET['link']})
def download2(request):
        if request.method == 'GET':
                if request.GET['vid']=="video":                 
                 if  YouTube(request.GET['link']).streams[0].download('C:/Users/lenny/OneDrive/Escritorio/ProyectoDjango/Proyecto1'):
                    return render(request,'formulario.html',{"confirmacion":"true"}) 
                 else:   
                     return render(request,'formulario.html',{"confirmacion":"Vuelve a introducir el url"}) 

                else:
                    if  YouTube(request.GET['link']).streams.filter(only_audio=True, abr='160kbps').first().download('C:/Users/lenny/OneDrive/Escritorio/ProyectoDjango/Proyecto1') :
                        return render(request,'formulario.html',{"confirmacion":"true"}) 
                    else:   
                     return render(request,'formulario.html',{"confirmacion":"Vuelve a introducir el url"})      
        return HttpResponse("descargado")
                        

