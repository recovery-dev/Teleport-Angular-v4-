/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '../../../../../module/pages/dashboard/billing/billing.payment.component';
import * as i3 from '../../../../../module/pages/dashboard/access-denied/access.directive';
import * as i4 from '@ngrx/store';
import * as i5 from '@angular/common';
import * as i6 from '@angular/router';
import * as i7 from '../../../../../module/services/billing.service';
import * as i8 from '../../../../../module/services/message.service';
import * as i9 from '../../../../../module/services/modal.service';
const styles_TeleportDevPortalBillingPaymentComponent:any[] = ([] as any[]);
export const RenderType_TeleportDevPortalBillingPaymentComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_TeleportDevPortalBillingPaymentComponent,data:{}});
function View_TeleportDevPortalBillingPaymentComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'div',[['class',
      'full-block-busy']],(null as any),(null as any),(null as any),(null as any),
      (null as any)))],(null as any),(null as any));
}
export function View_TeleportDevPortalBillingPaymentComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),76,'div',[['class','col-md-10 full-block-busy-container']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h4',[['class',
      'text-uppercase']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Make a Payment'])),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Enter the payment amount, set the payment method and press SUBMIT PAYMENT.'])),
      (_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),64,'form',[['class','form-horizontal'],['id','paymentForm'],
              ['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'submit'],[(null as any),'reset']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,11).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,11).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.ɵbf,([] as any[]),
          (null as any),(null as any)),i0.ɵdid(16384,[['paymentForm',4]],0,i1.NgForm,
          [[8,(null as any)],[8,(null as any)]],(null as any),(null as any)),i0.ɵprd(2048,
          (null as any),i1.ControlContainer,(null as any),[i1.NgForm]),i0.ɵdid(16384,
          (null as any),0,i1.NgControlStatusGroup,[i1.ControlContainer],(null as any),
          (null as any)),(_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'p',[['class','clearfix']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),23,'div',[['class','form-group clearfix']],[[2,
              'has-error',(null as any)]],(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'label',[['class','col-md-2 control-label'],
              ['for','payment-amount']],(null as any),(null as any),(null as any),
              (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Amount'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),17,'div',[['class','col-md-6']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),8,
          'input',[['class','form-control'],['id','payment-amount'],['name','payAmount'],
              ['required',''],['style','font-size:18pt'],['type','number']],[[1,'required',
              0],[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],[2,
              'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'ngModelChange'],[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend'],
              [(null as any),'change']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.TeleportDevPortalBillingPaymentComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,26)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,26).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,26)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,26)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('change' === en)) {
              const pd_4:any = ((<any>i0.ɵnov(_v,27).onChange($event.target.value)) !== false);
              ad = (pd_4 && ad);
            }
            if (('input' === en)) {
              const pd_5:any = ((<any>i0.ɵnov(_v,27).onChange($event.target.value)) !== false);
              ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
              const pd_6:any = ((<any>i0.ɵnov(_v,27).onTouched()) !== false);
              ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_7:any = ((<any>(_co.amount = $event)) !== false);
              ad = (pd_7 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(16384,(null as any),0,i1.ɵbc,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any)),i0.ɵdid(16384,(null as any),0,i1.RequiredValidator,
          ([] as any[]),{required:[0,'required']},(null as any)),i0.ɵprd(1024,(null as any),
          i1.NG_VALIDATORS,(p0_0:any) => {
            return [p0_0];
          },[i1.RequiredValidator]),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,
          (p0_0:any,p1_0:any) => {
            return [p0_0,p1_0];
          },[i1.DefaultValueAccessor,i1.ɵbc]),i0.ɵdid(671744,[['payAmount',4]],0,i1.NgModel,
          [[2,i1.ControlContainer],[2,i1.NG_VALIDATORS],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,
          (null as any),i1.NgControl,(null as any),[i1.NgModel]),i0.ɵdid(16384,(null as any),
          0,i1.NgControlStatus,[i1.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'span',[['class','help-block']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['A '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['payment amount'])),(_l()(),i0.ɵted((null as any),
          [' is required.'])),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),
          i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),['\n\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',[['class','clearfix']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          [' '])),(_l()(),i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),10,'div',[['class','form-group clearfix']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'label',
          [['class','col-md-2 control-label']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Method'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),4,'div',[['class','col-md-6'],['style','min-height:65px; transition:height 500ms; background:url(\'img/squares.svg\') center center no-repeat; background-size: contain;']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'div',[['id','dropin-container'],['style','background:#f6f7f8']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(4210688,(null as any),0,i3.AllowAccessDirective,[i0.ElementRef,i0.Renderer2,
          i4.Store],{allowAccess:[0,'allowAccess']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),
          i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',[['class','clearfix']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),[' '])),(_l()(),
          i0.ɵted((null as any),['\n\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),11,'div',[['class','form-group clearfix']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'div',
          [['class','col-md-8 text-right']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-link'],
          ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i2.TeleportDevPortalBillingPaymentComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onCancel()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Cancel'])),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),2,'button',[['class','btn btn-success'],['type','submit']],
          [[8,'disabled',0]],(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(4210688,(null as any),0,i3.AllowAccessDirective,[i0.ElementRef,i0.Renderer2,
          i4.Store],{allowAccess:[0,'allowAccess']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['Submit Payment'])),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n\n    '])),(_l()(),i0.ɵted((null as any),['\n\n    '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_TeleportDevPortalBillingPaymentComponent_1)),
      i0.ɵdid(16384,(null as any),0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),['\n\n'])),(_l()(),
          i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i2.TeleportDevPortalBillingPaymentComponent = _v.component;
    const currVal_16:any = '';
    _ck(_v,28,0,currVal_16);
    const currVal_17:any = 'payAmount';
    const currVal_18:any = _co.amount;
    _ck(_v,31,0,currVal_17,currVal_18);
    const currVal_19:any = 'account.billing.payments.update';
    _ck(_v,54,0,currVal_19);
    const currVal_21:any = 'account.billing.payments.create';
    _ck(_v,69,0,currVal_21);
    const currVal_22:any = _co.isBusy;
    _ck(_v,76,0,currVal_22);
  },(_ck,_v) => {
    var _co:i2.TeleportDevPortalBillingPaymentComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,13).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,13).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,13).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,13).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,13).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,13).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,13).ngClassPending;
    _ck(_v,9,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:boolean = !i0.ɵnov(_v,31).valid;
    _ck(_v,18,0,currVal_7);
    const currVal_8:any = (i0.ɵnov(_v,28).required? '': (null as any));
    const currVal_9:any = i0.ɵnov(_v,33).ngClassUntouched;
    const currVal_10:any = i0.ɵnov(_v,33).ngClassTouched;
    const currVal_11:any = i0.ɵnov(_v,33).ngClassPristine;
    const currVal_12:any = i0.ɵnov(_v,33).ngClassDirty;
    const currVal_13:any = i0.ɵnov(_v,33).ngClassValid;
    const currVal_14:any = i0.ɵnov(_v,33).ngClassInvalid;
    const currVal_15:any = i0.ɵnov(_v,33).ngClassPending;
    _ck(_v,25,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,
        currVal_15);
    const currVal_20:boolean = (!i0.ɵnov(_v,11).form.valid || !_co.isReady);
    _ck(_v,68,0,currVal_20);
  });
}
export function View_TeleportDevPortalBillingPaymentComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'teleport-dev-portal-billing-payment',
      ([] as any[]),(null as any),(null as any),(null as any),View_TeleportDevPortalBillingPaymentComponent_0,
      RenderType_TeleportDevPortalBillingPaymentComponent)),i0.ɵdid(4374528,(null as any),
      0,i2.TeleportDevPortalBillingPaymentComponent,[i6.Router,i7.BillingService,i8.MessageService,
          i9.ModalService,i0.NgZone],(null as any),(null as any))],(null as any),(null as any));
}
export const TeleportDevPortalBillingPaymentComponentNgFactory:i0.ComponentFactory<i2.TeleportDevPortalBillingPaymentComponent> = i0.ɵccf('teleport-dev-portal-billing-payment',
    i2.TeleportDevPortalBillingPaymentComponent,View_TeleportDevPortalBillingPaymentComponent_Host_0,
    {},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcGF0cmlja21hcnRpbi9Eb2N1bWVudHMvU2hvdXRQb2ludFByb2plY3RzL1RlbGVQb3J0L3RlbGVwb3J0LWFwcC1tb2R1bGVzL3RlbGVwb3J0LW1vZHVsZS1kZXYtcG9ydGFsL21vZHVsZS9wYWdlcy9kYXNoYm9hcmQvYmlsbGluZy9iaWxsaW5nLnBheW1lbnQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvcGF0cmlja21hcnRpbi9Eb2N1bWVudHMvU2hvdXRQb2ludFByb2plY3RzL1RlbGVQb3J0L3RlbGVwb3J0LWFwcC1tb2R1bGVzL3RlbGVwb3J0LW1vZHVsZS1kZXYtcG9ydGFsL21vZHVsZS9wYWdlcy9kYXNoYm9hcmQvYmlsbGluZy9iaWxsaW5nLnBheW1lbnQuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9wYXRyaWNrbWFydGluL0RvY3VtZW50cy9TaG91dFBvaW50UHJvamVjdHMvVGVsZVBvcnQvdGVsZXBvcnQtYXBwLW1vZHVsZXMvdGVsZXBvcnQtbW9kdWxlLWRldi1wb3J0YWwvbW9kdWxlL3BhZ2VzL2Rhc2hib2FyZC9iaWxsaW5nL2JpbGxpbmcucGF5bWVudC5odG1sIiwibmc6Ly8vaG9tZS9wYXRyaWNrbWFydGluL0RvY3VtZW50cy9TaG91dFBvaW50UHJvamVjdHMvVGVsZVBvcnQvdGVsZXBvcnQtYXBwLW1vZHVsZXMvdGVsZXBvcnQtbW9kdWxlLWRldi1wb3J0YWwvbW9kdWxlL3BhZ2VzL2Rhc2hib2FyZC9iaWxsaW5nL2JpbGxpbmcucGF5bWVudC5jb21wb25lbnQudHMuVGVsZXBvcnREZXZQb3J0YWxCaWxsaW5nUGF5bWVudENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBmdWxsLWJsb2NrLWJ1c3ktY29udGFpbmVyXCI+XG5cbiAgICA8aDQgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPk1ha2UgYSBQYXltZW50PC9oND5cbiAgICA8cD5FbnRlciB0aGUgcGF5bWVudCBhbW91bnQsIHNldCB0aGUgcGF5bWVudCBtZXRob2QgYW5kIHByZXNzIFNVQk1JVCBQQVlNRU5ULjwvcD5cblxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgaWQ9XCJwYXltZW50Rm9ybVwiICNwYXltZW50Rm9ybT1cIm5nRm9ybVwiPlxuXG4gICAgICAgIDxwIGNsYXNzPVwiY2xlYXJmaXhcIj4mbmJzcDs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY2xlYXJmaXhcIiBbY2xhc3MuaGFzLWVycm9yXT1cIiEgcGF5QW1vdW50LnZhbGlkXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMiBjb250cm9sLWxhYmVsXCIgZm9yPVwicGF5bWVudC1hbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPVwiZm9udC1zaXplOjE4cHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwicGF5bWVudC1hbW91bnRcIiB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJhbW91bnRcIiBuYW1lPVwicGF5QW1vdW50XCIgI3BheUFtb3VudD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAtYmxvY2tcIj5BIDxzdHJvbmc+cGF5bWVudCBhbW91bnQ8L3N0cm9uZz4gaXMgcmVxdWlyZWQuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzPVwiY2xlYXJmaXhcIj4mbmJzcDs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC0yIGNvbnRyb2wtbGFiZWxcIj5NZXRob2Q8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCIgc3R5bGU9XCJtaW4taGVpZ2h0OjY1cHg7IHRyYW5zaXRpb246aGVpZ2h0IDUwMG1zOyBiYWNrZ3JvdW5kOnVybCgnaW1nL3NxdWFyZXMuc3ZnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZHJvcGluLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZDojZjZmN2Y4XCIgW2FsbG93QWNjZXNzXT1cIidhY2NvdW50LmJpbGxpbmcucGF5bWVudHMudXBkYXRlJ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzPVwiY2xlYXJmaXhcIj4mbmJzcDs8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGlua1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DYW5jZWwoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiEgcGF5bWVudEZvcm0uZm9ybS52YWxpZCB8fCAhIGlzUmVhZHlcIiBbYWxsb3dBY2Nlc3NdPVwiJ2FjY291bnQuYmlsbGluZy5wYXltZW50cy5jcmVhdGUnXCI+U3VibWl0IFBheW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZm9ybT5cblxuICAgIDxkaXYgY2xhc3M9XCJmdWxsLWJsb2NrLWJ1c3lcIiAqbmdJZj1cImlzQnVzeVwiPjwvZGl2PlxuXG48L2Rpdj5cbiIsIjx0ZWxlcG9ydC1kZXYtcG9ydGFsLWJpbGxpbmctcGF5bWVudD48L3RlbGVwb3J0LWRldi1wb3J0YWwtYmlsbGluZy1wYXltZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDc0NJO01BQUE7TUFBQTs7O29CQXRDSix1Q0FDQTtNQUFBO01BQUEsMERBQWlEO01BQUEsZUFFN0M7TUFBQTtNQUEyQixtREFBbUI7VUFBQSxhQUM5QztVQUFBO01BQUc7TUFBOEUsNkNBRWpGO1VBQUE7Y0FBQTtjQUFBO2NBQUE7a0JBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxvQ0FBQTtVQUFBLDBFQUFBO1VBQUEsb0VBQUE7VUFBQTtVQUFBLGVBQXFFLGlEQUVqRTtpQkFBQTtjQUFBLDBEQUFvQjtVQUFBLFFBQVUsaURBRTlCO1VBQUE7Y0FBQTtVQUFBLGdCQUF1RSxtREFDbkU7aUJBQUE7Y0FBQTtjQUFBLDhCQUEyRDtNQUFjLG1EQUN6RTtVQUFBO1VBQUEsNENBQXNCO1VBQUEseUJBQ2xCO1VBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFxRjtjQUFBO2NBQUE7WUFBQTtZQUFyRjtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUEsOERBQUE7MkJBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQTtVQUFBLDJDQUFBO1VBQUE7VUFBQSxxRUFBQTtVQUFBLDhEQUFBO1VBQUEsaUVBQXlKO2lCQUFBLHdDQUN6SjtVQUFBO1VBQUEsNENBQXlCO1VBQUEsU0FBRTtVQUFBO01BQVEsbURBQXVCO1VBQUEsb0JBQW9CLG1EQUM1RTtpQkFBQSxnQ0FDSjtNQUVOO1VBQUEsMERBQW9CO1VBQUEsUUFBVSxpREFFOUI7VUFBQTtVQUFBLDBEQUFpQztVQUFBLHFCQUM3QjtVQUFBO1VBQUEsOEJBQXNDO01BQWMsbURBQ3BEO1VBQUE7VUFBQTtNQUE2Six1REFDeko7VUFBQTtVQUFBO2FBQUE7a0JBQUEsaURBQThHO1VBQUEscUJBQzVHLCtDQUNKO2lCQUFBLGtDQUVOO1VBQUE7VUFBQSw4QkFBb0Isc0NBQVU7aUJBQUEsa0NBRTlCO1VBQUE7VUFBQSw0Q0FBaUM7VUFBQSxxQkFDN0I7VUFBQTtVQUFBLDhCQUFpQztNQUM3QjtVQUFBO1FBQUE7UUFBQTtRQUEyQztVQUFBO1VBQUE7UUFBQTtRQUEzQztNQUFBLGdDQUFnRSwyQ0FBZTtpQkFBQSx3Q0FDL0U7VUFBQTtVQUFBO2FBQUE7a0JBQUEsaURBQW1KO1VBQUEscUJBQXVCO01BQ3hLLCtDQUNKO1VBQUEsZUFFSCw2Q0FFUDtVQUFBO2FBQUE7VUFBQSx3QkFBa0QseUNBRWhEO2lCQUFBOztJQTNCMEo7SUFBaEosWUFBZ0osVUFBaEo7SUFBMEc7SUFBckI7SUFBckYsWUFBMEcsV0FBckIsVUFBckY7SUFVc0Q7SUFBdEQsWUFBc0QsVUFBdEQ7SUFTaUc7SUFBakcsWUFBaUcsVUFBakc7SUFNaUI7SUFBN0IsWUFBNkIsVUFBN0I7OztJQWhDQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFdBQUEscUVBQUE7SUFJcUM7SUFBakMsWUFBaUMsU0FBakM7SUFHUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsWUFBQSxVQUFBO1FBQUEsVUFBQTtJQW1COEM7SUFBOUMsWUFBOEMsVUFBOUM7Ozs7b0JDaENoQjtNQUFBO3lEQUFBLFVBQUE7TUFBQTttQ0FBQTs7OzsifQ==