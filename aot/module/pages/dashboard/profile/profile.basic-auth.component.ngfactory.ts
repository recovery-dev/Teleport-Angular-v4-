/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../module/pages/dashboard/access-denied/access.directive';
import * as i2 from '@ngrx/store';
import * as i3 from '@angular/common';
import * as i4 from '@angular/router';
import * as i5 from '../../../../../module/pages/dashboard/profile/profile.basic-auth.component';
import * as i6 from '../../../../../module/services/modal.service';
import * as i7 from '../../../../../module/services/message.service';
import * as i8 from '../../../../../module/services/account.credentials.service';
const styles_TeleportDevPortalProfileBasicAuthComponent:any[] = ([] as any[]);
export const RenderType_TeleportDevPortalProfileBasicAuthComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_TeleportDevPortalProfileBasicAuthComponent,data:{}});
function View_TeleportDevPortalProfileBasicAuthComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'button',[['class',
      'btn btn-link'],['type','button']],(null as any),[[(null as any),'click']],(_v,
      en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.create()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
      [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['Generate Credential']))],(_ck,_v) => {
    const currVal_0:any = 'account.credentials.create';
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
function View_TeleportDevPortalProfileBasicAuthComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'small',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['Max of 10 Credentials Reached']))],(null as any),(null as any));
}
function View_TeleportDevPortalProfileBasicAuthComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),26,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
      4,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'input',[['class','form-control'],['readonly',
          ''],['title','Username'],['type','password']],[[8,'value',0]],[[(null as any),
          'focus'],[(null as any),'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('focus' === en)) {
          const pd_0:any = ((<any>_co.apiKeyInputFocus($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>_co.apiKeyInputBlur($event)) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
      [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'td',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'input',[['class','form-control'],['readonly',''],['title',
              'Password'],['type','password']],[[8,'value',0]],[[(null as any),'focus'],
              [(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('focus' === en)) {
              const pd_0:any = ((<any>_co.apiKeyInputFocus($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>_co.apiKeyInputBlur($event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
          [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'td',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'input',[['class','form-control'],['readonly',''],['title',
              'Authorization'],['type','password']],[[8,'value',0]],[[(null as any),
              'focus'],[(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('focus' === en)) {
              const pd_0:any = ((<any>_co.apiKeyInputFocus($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>_co.apiKeyInputBlur($event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
          [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'td',
          [['class','text-right']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),2,'button',[['class','btn btn-link'],
              ['type','button']],[[8,'disabled',0]],[[(null as any),'click']],(_v,
              en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.remove(_v.context.$implicit)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
          [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['Delete'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        ']))],(_ck,_v) => {
    const currVal_1:any = 'account.credentials.read';
    _ck(_v,5,0,currVal_1);
    const currVal_3:any = 'account.credentials.read';
    _ck(_v,11,0,currVal_3);
    const currVal_5:any = 'account.credentials.read';
    _ck(_v,17,0,currVal_5);
    const currVal_7:any = 'account.credentials.delete';
    _ck(_v,23,0,currVal_7);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit.userName;
    _ck(_v,4,0,currVal_0);
    const currVal_2:any = _v.context.$implicit.password;
    _ck(_v,10,0,currVal_2);
    const currVal_4:any = _v.context.$implicit.authorization;
    _ck(_v,16,0,currVal_4);
    const currVal_6:any = (_co.Credentials.length === 0);
    _ck(_v,22,0,currVal_6);
  });
}
function View_TeleportDevPortalProfileBasicAuthComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),25,'table',[['class',
      'table']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),16,'thead',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),13,'tr',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Username'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Password'])),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['Authorization Header'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_TeleportDevPortalProfileBasicAuthComponent_4)),i0.ɵdid(802816,
          (null as any),0,i3.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
          {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵted((null as any),['\n\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.Credentials;
    _ck(_v,23,0,currVal_0);
  },(null as any));
}
function View_TeleportDevPortalProfileBasicAuthComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['class',
      'full-block-busy']],(null as any),(null as any),(null as any),(null as any),
      (null as any)))],(null as any),(null as any));
}
export function View_TeleportDevPortalProfileBasicAuthComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),49,'div',[['class','col-md-11']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),1,'h4',[['class','text-uppercase']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['Credentials'])),(_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Manage the account\'s basic auth credentials.'])),
      (_l()(),i0.ɵted((null as any),['\n\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'h4',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        Account Credentials (Basic Auth)\n        '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TeleportDevPortalProfileBasicAuthComponent_1)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TeleportDevPortalProfileBasicAuthComponent_2)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
          i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n        Basic Auth Credentials are for all Account-level API requests, including /Applications, /Logs, /Alerts, /Recordings, and /Payments.\n    '])),
      (_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_TeleportDevPortalProfileBasicAuthComponent_3)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'h5',[['class','text-center']],[[8,
              'hidden',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Madness! You must have at least one Basic Auth credential.'])),
      (_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n        Application Credentials (API Key)\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'button',[['class','btn btn-link'],
          ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,33).onClick()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i4.RouterLink,
          [i4.Router,i4.ActivatedRoute,[8,(null as any)],i0.Renderer2,i0.ElementRef],
          {routerLink:[0,'routerLink']},(null as any)),i0.ɵpad(1),i0.ɵdid(4210688,
          (null as any),0,i1.AllowAccessDirective,[i0.ElementRef,i0.Renderer2,i2.Store],
          {allowAccess:[0,'allowAccess']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['View Applications'])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
          i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          7,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n        All other requests use an API Key that can be found under your individual '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'a',([] as any[]),[[1,'target',
          0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,42).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i0.ɵdid(671744,(null as any),0,i4.RouterLinkWithHref,
          [i4.Router,i4.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i0.ɵpad(1),i0.ɵdid(4210688,(null as any),0,i1.AllowAccessDirective,
          [i0.ElementRef,i0.Renderer2,i2.Store],{allowAccess:[0,'allowAccess']},(null as any)),
      (_l()(),i0.ɵted((null as any),['Applications'])),(_l()(),i0.ɵted((null as any),
          ['.\n    '])),(_l()(),i0.ɵted((null as any),['\n\n\n    '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_TeleportDevPortalProfileBasicAuthComponent_5)),
      i0.ɵdid(16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n'])),(_l()(),
          i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i5.TeleportDevPortalProfileBasicAuthComponent = _v.component;
    const currVal_0:any = (_co.Credentials.length <= 10);
    _ck(_v,12,0,currVal_0);
    const currVal_1:any = (_co.Credentials.length > 10);
    _ck(_v,15,0,currVal_1);
    const currVal_2:any = _co.Credentials;
    _ck(_v,22,0,currVal_2);
    const currVal_4:any = _ck(_v,34,0,'/apiv1/applications');
    _ck(_v,33,0,currVal_4);
    const currVal_5:any = 'account.applications.app.read';
    _ck(_v,35,0,currVal_5);
    const currVal_8:any = _ck(_v,43,0,'/apiv1/applications');
    _ck(_v,42,0,currVal_8);
    const currVal_9:any = 'account.applications.app.read';
    _ck(_v,44,0,currVal_9);
    const currVal_10:any = _co.isBusy;
    _ck(_v,49,0,currVal_10);
  },(_ck,_v) => {
    var _co:i5.TeleportDevPortalProfileBasicAuthComponent = _v.component;
    const currVal_3:any = _co.Credentials;
    _ck(_v,24,0,currVal_3);
    const currVal_6:any = i0.ɵnov(_v,42).target;
    const currVal_7:any = i0.ɵnov(_v,42).href;
    _ck(_v,41,0,currVal_6,currVal_7);
  });
}
export function View_TeleportDevPortalProfileBasicAuthComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'teleport-dev-portal-dashboard-profile-basic-auth',
      ([] as any[]),(null as any),(null as any),(null as any),View_TeleportDevPortalProfileBasicAuthComponent_0,
      RenderType_TeleportDevPortalProfileBasicAuthComponent)),i0.ɵdid(4374528,(null as any),
      0,i5.TeleportDevPortalProfileBasicAuthComponent,[i6.ModalService,i7.MessageService,
          i8.AccountCredentialsService,i2.Store,i2.ReducerManagerDispatcher],(null as any),
      (null as any))],(null as any),(null as any));
}
export const TeleportDevPortalProfileBasicAuthComponentNgFactory:i0.ComponentFactory<i5.TeleportDevPortalProfileBasicAuthComponent> = i0.ɵccf('teleport-dev-portal-dashboard-profile-basic-auth',
    i5.TeleportDevPortalProfileBasicAuthComponent,View_TeleportDevPortalProfileBasicAuthComponent_Host_0,
    {},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcGF0cmlja21hcnRpbi9Eb2N1bWVudHMvU2hvdXRQb2ludFByb2plY3RzL1RlbGVQb3J0L3RlbGVwb3J0LWFwcC1tb2R1bGVzL3RlbGVwb3J0LW1vZHVsZS1kZXYtcG9ydGFsL21vZHVsZS9wYWdlcy9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmJhc2ljLWF1dGguY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvcGF0cmlja21hcnRpbi9Eb2N1bWVudHMvU2hvdXRQb2ludFByb2plY3RzL1RlbGVQb3J0L3RlbGVwb3J0LWFwcC1tb2R1bGVzL3RlbGVwb3J0LW1vZHVsZS1kZXYtcG9ydGFsL21vZHVsZS9wYWdlcy9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmJhc2ljLWF1dGguY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9wYXRyaWNrbWFydGluL0RvY3VtZW50cy9TaG91dFBvaW50UHJvamVjdHMvVGVsZVBvcnQvdGVsZXBvcnQtYXBwLW1vZHVsZXMvdGVsZXBvcnQtbW9kdWxlLWRldi1wb3J0YWwvbW9kdWxlL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuYmFzaWMtYXV0aC5odG1sIiwibmc6Ly8vaG9tZS9wYXRyaWNrbWFydGluL0RvY3VtZW50cy9TaG91dFBvaW50UHJvamVjdHMvVGVsZVBvcnQvdGVsZXBvcnQtYXBwLW1vZHVsZXMvdGVsZXBvcnQtbW9kdWxlLWRldi1wb3J0YWwvbW9kdWxlL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuYmFzaWMtYXV0aC5jb21wb25lbnQudHMuVGVsZXBvcnREZXZQb3J0YWxQcm9maWxlQmFzaWNBdXRoQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG48ZGl2IGNsYXNzPVwiY29sLW1kLTExXCI+XG5cbiAgICA8aDQgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPkNyZWRlbnRpYWxzPC9oND5cblxuICAgIDxwPk1hbmFnZSB0aGUgYWNjb3VudCdzIGJhc2ljIGF1dGggY3JlZGVudGlhbHMuPC9wPlxuXG5cbiAgICA8aDQ+XG4gICAgICAgIEFjY291bnQgQ3JlZGVudGlhbHMgKEJhc2ljIEF1dGgpXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJDcmVkZW50aWFscy5sZW5ndGggPD0gMTBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwiY3JlYXRlKClcIiBbYWxsb3dBY2Nlc3NdPVwiJ2FjY291bnQuY3JlZGVudGlhbHMuY3JlYXRlJ1wiPkdlbmVyYXRlIENyZWRlbnRpYWw8L2J1dHRvbj5cbiAgICAgICAgPHNtYWxsICpuZ0lmPVwiQ3JlZGVudGlhbHMubGVuZ3RoID4gMTBcIj5NYXggb2YgMTAgQ3JlZGVudGlhbHMgUmVhY2hlZDwvc21hbGw+XG4gICAgPC9oND5cblxuICAgIDxwPlxuICAgICAgICBCYXNpYyBBdXRoIENyZWRlbnRpYWxzIGFyZSBmb3IgYWxsIEFjY291bnQtbGV2ZWwgQVBJIHJlcXVlc3RzLCBpbmNsdWRpbmcgL0FwcGxpY2F0aW9ucywgL0xvZ3MsIC9BbGVydHMsIC9SZWNvcmRpbmdzLCBhbmQgL1BheW1lbnRzLlxuICAgIDwvcD5cblxuICAgIDx0YWJsZSAqbmdJZj1cIkNyZWRlbnRpYWxzXCIgY2xhc3M9XCJ0YWJsZVwiPlxuXG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5QYXNzd29yZDwvdGg+XG4gICAgICAgICAgICA8dGg+QXV0aG9yaXphdGlvbiBIZWFkZXI8L3RoPlxuICAgICAgICAgICAgPHRoPiZuYnNwOzwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNyZWQgb2YgQ3JlZGVudGlhbHNcIj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdGl0bGU9XCJVc2VybmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInBhc3N3b3JkXCIgW3ZhbHVlXT1cImNyZWQudXNlck5hbWVcIiAoZm9jdXMpPVwiYXBpS2V5SW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwiYXBpS2V5SW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYWxsb3dBY2Nlc3NdPVwiJ2FjY291bnQuY3JlZGVudGlhbHMucmVhZCdcIiByZWFkb25seT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHRpdGxlPVwiUGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIFt2YWx1ZV09XCJjcmVkLnBhc3N3b3JkXCIgKGZvY3VzKT1cImFwaUtleUlucHV0Rm9jdXMoJGV2ZW50KVwiIChibHVyKT1cImFwaUtleUlucHV0Qmx1cigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2FsbG93QWNjZXNzXT1cIidhY2NvdW50LmNyZWRlbnRpYWxzLnJlYWQnXCIgcmVhZG9ubHk+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0aXRsZT1cIkF1dGhvcml6YXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJwYXNzd29yZFwiIFt2YWx1ZV09XCJjcmVkLmF1dGhvcml6YXRpb25cIiAoZm9jdXMpPVwiYXBpS2V5SW5wdXRGb2N1cygkZXZlbnQpXCIgKGJsdXIpPVwiYXBpS2V5SW5wdXRCbHVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYWxsb3dBY2Nlc3NdPVwiJ2FjY291bnQuY3JlZGVudGlhbHMucmVhZCdcIiByZWFkb25seT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAoY2xpY2spPVwicmVtb3ZlKGNyZWQpXCIgW2Rpc2FibGVkXT1cIkNyZWRlbnRpYWxzLmxlbmd0aCA9PT0gMFwiIFthbGxvd0FjY2Vzc109XCInYWNjb3VudC5jcmVkZW50aWFscy5kZWxldGUnXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuXG4gICAgPC90YWJsZT5cblxuICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyXCIgW2hpZGRlbl09XCJDcmVkZW50aWFsc1wiPk1hZG5lc3MhIFlvdSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIEJhc2ljIEF1dGggY3JlZGVudGlhbC48L2g1PlxuXG4gICAgPHA+Jm5ic3A7PC9wPlxuXG4gICAgPGg0PlxuICAgICAgICBBcHBsaWNhdGlvbiBDcmVkZW50aWFscyAoQVBJIEtleSlcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBbcm91dGVyTGlua109XCJbJy9hcGl2MS9hcHBsaWNhdGlvbnMnXVwiIFthbGxvd0FjY2Vzc109XCInYWNjb3VudC5hcHBsaWNhdGlvbnMuYXBwLnJlYWQnXCI+VmlldyBBcHBsaWNhdGlvbnM8L2J1dHRvbj5cbiAgICA8L2g0PlxuICAgIDxwPlxuICAgICAgICBBbGwgb3RoZXIgcmVxdWVzdHMgdXNlIGFuIEFQSSBLZXkgdGhhdCBjYW4gYmUgZm91bmQgdW5kZXIgeW91ciBpbmRpdmlkdWFsIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2FwaXYxL2FwcGxpY2F0aW9ucyddXCIgW2FsbG93QWNjZXNzXT1cIidhY2NvdW50LmFwcGxpY2F0aW9ucy5hcHAucmVhZCdcIj5BcHBsaWNhdGlvbnM8L2E+LlxuICAgIDwvcD5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZ1bGwtYmxvY2stYnVzeVwiICpuZ0lmPVwiaXNCdXN5XCI+PC9kaXY+XG5cbjwvZGl2PlxuIiwiPHRlbGVwb3J0LWRldi1wb3J0YWwtZGFzaGJvYXJkLXByb2ZpbGUtYmFzaWMtYXV0aD48L3RlbGVwb3J0LWRldi1wb3J0YWwtZGFzaGJvYXJkLXByb2ZpbGUtYmFzaWMtYXV0aD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDVVE7TUFBQTtlQUFBO0lBQUE7SUFBQTtJQUE0RTtNQUFBO01BQUE7SUFBQTtJQUE1RTtFQUFBLHVDQUFBO01BQUE7TUFBNEk7SUFBN0M7SUFBL0YsV0FBK0YsU0FBL0Y7Ozs7b0JBQ0E7TUFBQSx3RUFBdUM7YUFBQTs7O29CQW1CdkM7TUFBQSx3RUFBcUM7YUFBQSxvQ0FDakM7TUFBQTtNQUFBLGdCQUFJLHVEQUNBO2FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtRQUFxRjtVQUFBO1VBQUE7UUFBQTtRQUFtQztVQUFBO1VBQUE7UUFBQTtRQUF4SDtNQUFBLHVDQUFBO01BQUE7TUFDMkQsbURBQzFEO1VBQUEscUJBQ0w7VUFBQTtNQUFJLHVEQUNBO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFxRjtjQUFBO2NBQUE7WUFBQTtZQUFtQztjQUFBO2NBQUE7WUFBQTtZQUF4SDtVQUFBLHVDQUFBO1VBQUE7TUFDMkQsbURBQzFEO1VBQUEscUJBQ0w7VUFBQTtNQUFJLHVEQUNBO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUErRjtjQUFBO2NBQUE7WUFBQTtZQUFtQztjQUFBO2NBQUE7WUFBQTtZQUFsSTtVQUFBLHVDQUFBO1VBQUE7TUFDMkQsbURBQzFEO1VBQUEscUJBQ0w7VUFBQTtVQUFBLGdCQUF1Qix1REFDbkI7aUJBQUE7Y0FBQTt1QkFBQTtZQUFBO1lBQUE7WUFBMkM7Y0FBQTtjQUFBO1lBQUE7WUFBM0M7VUFBQSx1Q0FBQTtVQUFBO01BQXFKLDJDQUFlO01BQ25LO0lBWk07SUFEUCxXQUNPLFNBRFA7SUFLTztJQURQLFlBQ08sU0FEUDtJQUtPO0lBRFAsWUFDTyxTQURQO0lBSXdHO0lBQXhHLFlBQXdHLFNBQXhHOzs7SUFaNkQ7SUFBN0QsV0FBNkQsU0FBN0Q7SUFJNkQ7SUFBN0QsWUFBNkQsU0FBN0Q7SUFJa0U7SUFBbEUsWUFBa0UsU0FBbEU7SUFJa0U7SUFBbEUsWUFBa0UsU0FBbEU7Ozs7b0JBMUJaO01BQUE7TUFBeUMsaURBRXJDO1VBQUE7VUFBQSw4QkFBTztNQUNQO1VBQUEsMERBQUk7VUFBQSxxQkFDQTtVQUFBO01BQUksNkNBQWE7TUFDakI7VUFBQSwwREFBSTtVQUFBLGVBQWEsbURBQ2pCO2lCQUFBO2NBQUEsMERBQUk7VUFBQSwyQkFBeUI7TUFDN0I7VUFBQSwwREFBSTtVQUFBLFFBQVcsK0NBQ2Q7VUFBQSxpQkFDRyxpREFFUjtpQkFBQTtjQUFBLDBEQUFPO1VBQUEsaUJBQ1A7VUFBQSx5RUFBQTtVQUFBO1VBQUEsdUNBZ0JLO01BQ0c7O0lBakJKO0lBQUosWUFBSSxTQUFKOzs7O29CQWtDSjtNQUFBO01BQUE7OztvQkFoRUosdUNBQ0E7TUFBQTtNQUFBLDhCQUF1Qiw2Q0FFbkI7YUFBQTtVQUFBLDBEQUEyQjtNQUFBLGtCQUFnQiw2Q0FFM0M7TUFBQTtNQUFBLDRDQUFHO01BQWdELCtDQUduRDtVQUFBO1VBQUEsOEJBQUk7TUFFQTthQUFBO1VBQUEsd0JBQXdLLCtDQUN4SztpQkFBQTthQUFBO1VBQUEsd0JBQTRFLDJDQUMzRTtpQkFBQSw4QkFFTDtVQUFBO1VBQUEsZ0JBQUc7TUFFQyw2Q0FFSjtVQUFBO2FBQUE7VUFBQSx3QkErQlEsNkNBRVI7aUJBQUE7Y0FBQTtNQUErQztNQUErRCw2Q0FFOUc7VUFBQTtVQUFBLDhCQUFHLHNDQUFVO2lCQUFBLDhCQUViO1VBQUE7VUFBQSxnQkFBSTtNQUVBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsb0RBQTJDLFdBQTNDO1VBQUE7VUFBQSwrQ0FBa0k7VUFBQSx3QkFBMEIsMkNBQzNKO2lCQUFBLDRCQUNMO1VBQUE7VUFBQSxnQkFBRztNQUMyRTtVQUFBO1FBQUE7UUFBQTtVQUFBO2NBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUcsV0FBSDtVQUFBO01BQTBGLGlEQUFnQjtVQUFBLGNBQ3BMLCtDQUdKO1VBQUE7YUFBQTtVQUFBLHdCQUFrRCx5Q0FFaEQ7aUJBQUE7O0lBeERVO0lBQVIsWUFBUSxTQUFSO0lBQ087SUFBUCxZQUFPLFNBQVA7SUFPRztJQUFQLFlBQU8sU0FBUDtJQXVDK0M7SUFBM0MsWUFBMkMsU0FBM0M7SUFBa0Y7SUFBbEYsWUFBa0YsU0FBbEY7SUFHNkU7SUFBSCxZQUFHLFNBQUg7SUFBMEM7SUFBMUMsWUFBMEMsU0FBMUM7SUFJakQ7SUFBN0IsWUFBNkIsVUFBN0I7OztJQWJ3QjtJQUF4QixZQUF3QixTQUF4QjtJQVM4RTtJQUFBO0lBQUEsWUFBQSxtQkFBQTs7OztvQkM1RGxGO01BQUE7MkRBQUEsVUFBQTtNQUFBOzJFQUFBO01BQUE7Ozs7In0=
