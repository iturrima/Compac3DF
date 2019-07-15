
import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})


export class Tab3Page implements OnInit {

  // let youroptions:any;
  // let yourdata:any;
  myChart: Chart;
  // let yourheight:400;

  // this.myChart.data = this.yourdata;
  // this.myChart.config.options =this.youroptions;
  // this.myChart.update();

  // this.chartcontainer.nativeElement.style.height = this.yourheight + 'px';

 
  ngOnInit() {
    this.guardarCambios();
   
  }


  

  @ViewChild('chartContainer') chartcontainer: ElementRef;
  @ViewChild('chartcanvas') chartcanvas: ElementRef;
  
  ngAfterViewInit() {
    this.createChart();

  }
 

    @Input() forma: FormGroup;

  modelParameters:Object = {
    MP_Gs_C13:'2.7',
    MP_Steep_C14:'1.8',
    MP_Sopt_C15:'77.0',
    MP_Water_B17:'1',
    MP_WaterRange_C17:'13',
    MP_Dmax_STD_E13:'125.71915883322',
    MP_Dmax_MOD_E14:'134.142901457967',
    MP_Sm_E15:'98.0',
    MP_Dfield_E17:'5',
    MP_E90_G13:'30000'
    
  }

    // MP_Gs_C13:number;
    // MP_Steep_C14:number;
    // MP_Sopt_C15:number;
    // MP_Water_B17:number;
    // MP_WaterRange_C17:number;
    // MP_Dmax_STD_E13:number;
    // MP_Dmax_MOD_E14:number;
    // MP_Sm_E15:number;
    // MP_Dfield_E17:number;
    // MP_E90_G13:number;

                                                                      
// Grilla Y
public Grilla_Y_Y111:number; //SI($A111="","",SI(1/($M$64*$A111^2+Y$65*$A111+Y$66)>$L111,$L111*0.9999999,1/($M$64*$A111^2+Y$65*$A111+Y$66)))
public Grilla_Y_Y112:number;
public Grilla_Y_Y113:number;
public Grilla_Y_Y114:number;
public Grilla_Y_Y115:number;
public Grilla_Y_Y116:number;
public Grilla_Y_Y117:number;
public Grilla_Y_Y118:number;
public Grilla_Y_Y119:number;
public Grilla_Y_Y120:number;
public Grilla_Y_Y121:number;
public Grilla_Y_Y122:number;
public Grilla_Y_Y123:number;
public Grilla_Y_Y124:number;
public Grilla_Y_Y125:number;


// Density
public Columnas_Density_G129:number; //INDICE($B$129:$B$143,K.ESIMO.MENOR(SI(H129=$C$129:$C$143,COINCIDIR(FILA($C$129:$C$143),FILA($C$129:$C$143))),SUMA(--(H129=$H$129:H129))))
public Columnas_Density_G130:number;
public Columnas_Density_G131:number;
public Columnas_Density_G132:number;
public Columnas_Density_G133:number;
public Columnas_Density_G134:number;
public Columnas_Density_G135:number;
public Columnas_Density_G136:number;
public Columnas_Density_G137:number;
public Columnas_Density_G138:number;
public Columnas_Density_G139:number;
public Columnas_Density_G140:number;
public Columnas_Density_G141:number;
public Columnas_Density_G142:number;
public Columnas_Density_G143:number;

public Columnas_Density_G144_Array:Array<number>=[];

// Res 2
public Columnas_Res2_J129:number;
public Columnas_Res2_J130:number;
public Columnas_Res2_J131:number;
public Columnas_Res2_J132:number;
public Columnas_Res2_J133:number;
public Columnas_Res2_J134:number;
public Columnas_Res2_J135:number;
public Columnas_Res2_J136:number;
public Columnas_Res2_J137:number;
public Columnas_Res2_J138:number;
public Columnas_Res2_J139:number;
public Columnas_Res2_J140:number;
public Columnas_Res2_J141:number;
public Columnas_Res2_J142:number;
public Columnas_Res2_J143:number;

// Columna Density I
public Columnas_Density_I129:number;
public Columnas_Density_I130:number;
public Columnas_Density_I131:number;
public Columnas_Density_I132:number;
public Columnas_Density_I133:number;
public Columnas_Density_I134:number;
public Columnas_Density_I135:number;
public Columnas_Density_I136:number;
public Columnas_Density_I137:number;
public Columnas_Density_I138:number;
public Columnas_Density_I139:number;
public Columnas_Density_I140:number;
public Columnas_Density_I141:number;
public Columnas_Density_I142:number;
public Columnas_Density_I143:number;

// Columna Density L
public Columnas_Density_L129:number;
public Columnas_Density_L130:number;
public Columnas_Density_L131:number;
public Columnas_Density_L132:number;
public Columnas_Density_L133:number;
public Columnas_Density_L134:number;
public Columnas_Density_L135:number;
public Columnas_Density_L136:number;
public Columnas_Density_L137:number;
public Columnas_Density_L138:number;
public Columnas_Density_L139:number;
public Columnas_Density_L140:number;
public Columnas_Density_L141:number;
public Columnas_Density_L142:number;
public Columnas_Density_L143:number;




//celdas
public Columnas_Density_G144:number;
public Columnas_Res2_J144:number;
public Columnas_Res2_J145:number;
public Columnas_Density2_L144:number;

//variables
public Var_Woptmax_B51:number;
public Var_Woptmin_B52:number;
public Var_Steep_B53:number;
public Var_Sopt_B54:number;
public Var_Gs_B55:number;
public Var_Smax_B56:number;
public Var_Dmin_B57:number;
public Var_Dmax_B58:number;
public Var_k_B59:number;
public Var_R2_B60:number;
public Var_E90check_B61:number;

public prueba:number;



// W
public W_1_A69:number;
public W_2_A70:number;
public W_3_A71:number;
public W_4_A72:number;
public W_5_A73:number;
public W_6_A74:number;
public W_7_A75:number;
public W_8_A76:number;
public W_9_A77:number;
public W_10_A78:number;
public W_11_A79:number;
public W_12_A80:number;
public W_13_A81:number;
public W_14_A82:number;
public W_15_A83:number;
public W_16_A84:number;
public W_17_A85:number;
public W_18_A86:number;
public W_19_A87:number;
public W_20_A88:number;
public W_21_A89:number;
public W_22_A90:number;
public W_23_A91:number;
public W_24_A92:number;
public W_25_A93:number;
public W_26_A94:number;
public W_27_A95:number;
public W_28_A96:number;
public W_29_A97:number;
public W_30_A98:number;
public W_31_A99:number;
public W_32_A100:number;
public W_33_A101:number;
public W_34_A102:number;
public W_35_A103:number;
public W_36_A104:number;
public W_37_A105:number;
public W_38_A106:number;
public W_39_A107:number;
public W_40_A108:number;
public W_41_A109:number;


// parametros fijos
public Cero4:number;
public Cero2:number;
public Nove9:number;
public Cien:number;

//Model Parameters - Imputs Modelo
public MP_CM3:number;
 
//Model Parameters - Imputs Usuario
public MP_Gs_C13:number;
public MP_Steep_C14:number;
public MP_Sopt_C15:number;
public MP_Water_B17:number;
public MP_WaterRange_C17:number;
public MP_Dmax_STD_E13:number;
public MP_Dmax_MOD_E14:number;
public MP_Sm_E15:number;
public MP_Dfield_E17:number;
public MP_E90_G13:number;

//Project Data - Imputs Usuario
public PD_Wfield_G20:number;
public PD_Dfield_G21:number;

//Model Parameters - Resultados
public MP_Wopt_STDG14:number;
public MP_Wopt_MOD_G15:number;
public MP_R2_G17:number;


// Grilla de Celdas
public Grilla_E_M61:number;
public Grilla_Wopt_M62:number;
public Grilla_Gmmax_M63:number;
public Grilla_a_M64:number;
public Grilla_b_M65:number;
public Grilla_c_M66:number;
public Grilla_DMAX_L69:number; //134.47172924446
public Grilla_H_H129:number;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(1:1)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
public Grilla_H_H134:number;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(8:8)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
public Grilla_H_H139:number;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(11:11)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
public Grilla_Z_Z61:number;
public Grilla_Z_Z62:number;
public Grilla_Z_Z63:number;
public Grilla_Z_Z65:number;
public Grilla_Z_Z66:number;
public Grilla_Y_Y61:number;
// Grilla_Y_Y62:number = 13.67416569;
public Grilla_Y_Y62:number;
public Grilla_Y_Y63:number;
public Grilla_Y_Y65:number;
public Grilla_Y_Y66:number;

public Grilla_AA_AA61:number;
public Grilla_AA_AA62:number;
public Grilla_AA_AA63:number;
public Grilla_AA_AA65:number;
// =0.00002*$B$53*(AA$62^2)+(1/AA$63)
public Grilla_AA_AA66:number;


// (1/($M$64*$A69^2+Z$65*$A69+Z$66)>$L69,$L69*0.9999999,SI(1/($M$64*$A69^2+Z$65*$A69+Z$66)>$Y69,1/($M$64*$A69^2+Z$65*$A69+Z$66),+$Y69))
public STD1_IF:number;
public STD1_1:number;
public STD1_IF_prueba:number;


// formulas Field Target - Columna
public TAR_1_H63:number;
public TAR_2_I63:number;


// Zero Air
public ZER_1_B69:number;
public ZER_2_B70:number;
public ZER_3_B71:number;
public ZER_4_B72:number;
public ZER_5_B73:number;
public ZER_6_B74:number;
public ZER_7_B75:number;
public ZER_8_B76:number;
public ZER_9_B77:number;
public ZER_10_B78:number;
public ZER_11_B79:number;
public ZER_12_B80:number;
public ZER_13_B81:number;
public ZER_14_B82:number;
public ZER_15_B83:number;
public ZER_16_B84:number;
public ZER_17_B85:number;
public ZER_18_B86:number;
public ZER_19_B87:number;
public ZER_20_B88:number;
public ZER_21_B89:number;
public ZER_22_B90:number;
public ZER_23_B91:number;
public ZER_24_B92:number;
public ZER_25_B93:number;
public ZER_26_B94:number;
public ZER_27_B95:number;
public ZER_28_B96:number;
public ZER_29_B97:number;
public ZER_30_B98:number;
public ZER_31_B99:number;
public ZER_32_B100:number;
public ZER_33_B101:number;
public ZER_34_B102:number;
public ZER_35_B103:number;
public ZER_36_B104:number;
public ZER_37_B105:number;
public ZER_38_B106:number;
public ZER_39_B107:number;
public ZER_40_B108:number;
public ZER_41_B109:number;




// formulas Modified - Columna J
public MOD_1_J69:number;
public MOD_2_J70:number;
public MOD_3_J71:number;
public MOD_4_J72:number;
public MOD_5_J73:number;
public MOD_6_J74:number;
public MOD_7_J75:number;
public MOD_8_J76:number;
public MOD_9_J77:number;
public MOD_10_J78:number;
public MOD_11_J79:number;
public MOD_12_J80:number;
public MOD_13_J81:number;
public MOD_14_J82:number;
public MOD_15_J83:number;
public MOD_16_J84:number;
public MOD_17_J85:number;
public MOD_18_J86:number;
public MOD_19_J87:number;
public MOD_20_J88:number;
public MOD_21_J89:number;
public MOD_22_J90:number;
public MOD_23_J91:number;
public MOD_24_J92:number;
public MOD_25_J93:number;
public MOD_26_J94:number;
public MOD_27_J95:number;
public MOD_28_J96:number;
public MOD_29_J97:number;
public MOD_30_J98:number;
public MOD_31_J99:number;
public MOD_32_J100:number;
public MOD_33_J101:number;
public MOD_34_J102:number;
public MOD_35_J103:number;
public MOD_36_J104:number;
public MOD_37_J105:number;
public MOD_38_J106:number;
public MOD_39_J107:number;
public MOD_40_J108:number;
public MOD_41_J109:number;

//=SI(1/($M$64*$A69^2+Y$65*$A69+Y$66)>$L69,$L69*0.9999999,1/($M$64*$A69^2+Y$65*$A69+Y$66))
// =SI(1/($M$64*$A69^2+AA$65*$A69+AA$66)>$L69,$L69*0.9999999,SI(1/($M$64*$A69^2+AA$65*$A69+AA$66)>$Z69,1/($M$64*$A69^2+AA$65*$A69+AA$66),+$Z69))
//1/($M$64*$A69^2+Y$65*$A69+Y$66)

// formulas Standard - Columna I
public STD_1_I69:number;
public STD_2_I70:number;
public STD_3_I71:number;
public STD_4_I72:number;
public STD_5_I73:number;
public STD_6_I74:number;
public STD_7_I75:number;
public STD_8_I76:number;
public STD_9_I77:number;
public STD_10_I78:number;
public STD_11_I79:number;
public STD_12_I80:number;
public STD_13_I81:number;
public STD_14_I82:number;
public STD_15_I83:number;
public STD_16_I84:number;
public STD_17_I85:number;
public STD_18_I86:number;
public STD_19_I87:number;
public STD_20_I88:number;
public STD_21_I89:number;
public STD_22_I90:number;
public STD_23_I91:number;
public STD_24_I92:number;
public STD_25_I93:number;
public STD_26_I94:number;
public STD_27_I95:number;
public STD_28_I96:number;
public STD_29_I97:number;
public STD_30_I98:number;
public STD_31_I99:number;
public STD_32_I100:number;
public STD_33_I101:number;
public STD_34_I102:number;
public STD_35_I103:number;
public STD_36_I104:number;
public STD_37_I105:number;
public STD_38_I106:number;
public STD_39_I107:number;
public STD_40_I108:number;
public STD_41_I109:number;

// formulas Reduced - Columna H
public RED_1_H69:number;
public RED_2_H70:number;
public RED_3_H71:number;
public RED_4_H72:number;
public RED_5_H73:number;
public RED_6_H74:number;
public RED_7_H75:number;
public RED_8_H76:number;
public RED_9_H77:number;
public RED_10_H78:number;
public RED_11_H79:number;
public RED_12_H80:number;
public RED_13_H81:number;
public RED_14_H82:number;
public RED_15_H83:number;
public RED_16_H84:number;
public RED_17_H85:number;
public RED_18_H86:number;
public RED_19_H87:number;
public RED_20_H88:number;
public RED_21_H89:number;
public RED_22_H90:number;
public RED_23_H91:number;
public RED_24_H92:number;
public RED_25_H93:number;
public RED_26_H94:number;
public RED_27_H95:number;
public RED_28_H96:number;
public RED_29_H97:number;
public RED_30_H98:number;
public RED_31_H99:number;
public RED_32_H100:number;
public RED_33_H101:number;
public RED_34_H102:number;
public RED_35_H103:number;
public RED_36_H104:number;
public RED_37_H105:number;
public RED_38_H106:number;
public RED_39_H107:number;
public RED_40_H108:number;
public RED_41_H109:number;

// formulas Optimus - Columna C
public OPT_1_C69:number;
public OPT_2_C70:number;
public OPT_3_C71:number;
public OPT_4_C72:number;
public OPT_5_C73:number;
public OPT_6_C74:number;
public OPT_7_C75:number;
public OPT_8_C76:number;
public OPT_9_C77:number;
public OPT_10_C78:number;
public OPT_11_C79:number;
public OPT_12_C80:number;
public OPT_13_C81:number;
public OPT_14_C82:number;
public OPT_15_C83:number;
public OPT_16_C84:number;
public OPT_17_C85:number;
public OPT_18_C86:number;
public OPT_19_C87:number;
public OPT_20_C88:number;
public OPT_21_C89:number;
public OPT_22_C90:number;
public OPT_23_C91:number;
public OPT_24_C92:number;
public OPT_25_C93:number;
public OPT_26_C94:number;
public OPT_27_C95:number;
public OPT_28_C96:number;
public OPT_29_C97:number;
public OPT_30_C98:number;
public OPT_31_C99:number;
public OPT_32_C100:number;
public OPT_33_C101:number;
public OPT_34_C102:number;
public OPT_35_C103:number;
public OPT_36_C104:number;
public OPT_37_C105:number;
public OPT_38_C106:number;
public OPT_39_C107:number;
public OPT_40_C108:number;
public OPT_41_C109:number;


// Serie A
public A1:number;
public A2:number;
public A3:number;


// Serie B
public B1:number;
public B2:number;
public B3:number;
public B4:number;
public B5:number;
public B6:number;
public B7:number;
public B8:number;
public B9:number;
public B10:number;
public B11:number;
public B12:number;
public B13:number;
public B14:number;
public B15:number;
public B16:number;
public B17:number;
public B18:number;
public B19:number;
public B20:number;
public B21:number;
public B22:number;
public B23:number;
public B24:number;
public B25:number;
public B26:number;
public B27:number;
public B28:number;
public B29:number;
public B30:number;
public B31:number;
public B32:number;
public B33:number;
public B34:number;
public B35:number;
public B36:number;
public B37:number;
public B38:number;
public B39:number;
public B40:number;
public B41:number;

// Serie C
public C1:number;
public C2:number;
public C3:number;
public C4:number;
public C5:number;
public C6:number;
public C7:number;
public C8:number;
public C9:number;
public C10:number;
public C11:number;
public C12:number;
public C13:number;
public C14:number;
public C15:number;
public C16:number;
public C17:number;
public C18:number;
public C19:number;
public C20:number;
public C21:number;
public C22:number;
public C23:number;
public C24:number;
public C25:number;
public C26:number;
public C27:number;
public C28:number;
public C29:number;
public C30:number;
public C31:number;
public C32:number;
public C33:number;
public C34:number;
public C35:number;
public C36:number;
public C37:number;
public C38:number;
public C39:number;
public C40:number;
public C41:number;


// Serie D
public D1:number;
public D2:number;
public D3:number;
public D4:number;
public D5:number;
public D6:number;
public D7:number;
public D8:number;
public D9:number;
public D10:number;
public D11:number;
public D12:number;
public D13:number;
public D14:number;
public D15:number;
public D16:number;
public D17:number;
public D18:number;
public D19:number;
public D20:number;
public D21:number;
public D22:number;
public D23:number;
public D24:number;
public D25:number;
public D26:number;
public D27:number;
public D28:number;
public D29:number;
public D30:number;
public D31:number;
public D32:number;
public D33:number;
public D34:number;
public D35:number;
public D36:number;
public D37:number;
public D38:number;
public D39:number;
public D40:number;
public D41:number;


// Serie E
public E1:number;
public E2:number;
public E3:number;
public E4:number;
public E5:number;
public E6:number;
public E7:number;
public E8:number;
public E9:number;
public E10:number;
public E11:number;
public E12:number;
public E13:number;
public E14:number;
public E15:number;
public E16:number;
public E17:number;
public E18:number;
public E19:number;
public E20:number;
public E21:number;
public E22:number;
public E23:number;
public E24:number;
public E25:number;
public E26:number;
public E27:number;
public E28:number;
public E29:number;
public E30:number;
public E31:number;
public E32:number;
public E33:number;
public E34:number;
public E35:number;
public E36:number;
public E37:number;
public E38:number;
public E39:number;
public E40:number;
public E41:number;


// Serie F
public F1:number;
public F2:number;
public F3:number;
public F4:number;
public F5:number;
public F6:number;
public F7:number;
public F8:number;
public F9:number;
public F10:number;
public F11:number;
public F12:number;
public F13:number;
public F14:number;
public F15:number;
public F16:number;
public F17:number;
public F18:number;
public F19:number;
public F20:number;
public F21:number;
public F22:number;
public F23:number;
public F24:number;
public F25:number;
public F26:number;
public F27:number;
public F28:number;
public F29:number;
public F30:number;
public F31:number;
public F32:number;
public F33:number;
public F34:number;
public F35:number;
public F36:number;
public F37:number;
public F38:number;
public F39:number;
public F40:number;
public F41:number;


public lineChartLabels:Array<number> = [
  this.W_1_A69,
  this.W_2_A70,
  this.W_3_A71,
  this.W_4_A72,
  this.W_5_A73,
  this.W_6_A74,
  this.W_7_A75,
  this.W_8_A76,
  this.W_9_A77,
  this.W_10_A78,
  this.W_11_A79,
  this.W_12_A80,
  this.W_13_A81,
  this.W_14_A82,
  this.W_15_A83,
  this.W_16_A84,
  this.W_17_A85,
  this.W_18_A86,
  this.W_19_A87,
  this.W_20_A88,
  this.W_21_A89,
  this.W_22_A90,
  this.W_23_A91,
  this.W_24_A92,
  this.W_25_A93,
  this.W_26_A94,
  this.W_27_A95,
  this.W_28_A96,
  this.W_29_A97,
  this.W_30_A98,
  this.W_31_A99,
  this.W_32_A100,
  this.W_33_A101,
  this.W_34_A102,
  this.W_35_A103,
  this.W_36_A104,
  this.W_37_A105,
  this.W_38_A106,
  this.W_39_A107,
  this.W_40_A108,
  this.W_41_A109,
];

public lineChartDataB:Array<any>;
public lineChartDataC:Array<any>;
public lineChartDataD:Array<any>;
public lineChartDataE:Array<any>;
public lineChartDataF:Array<any>;
public lineChartData:Array<any>;

  constructor(){
    // console.log('datos del  chart', this.lineChartDataB['data']);
   
    // this.Grilla_Y_Y111.toFixed(1);
    console.log( this.modelParameters );

    this.forma = new FormGroup ({

          'MP_Gs_C13' : new FormControl         ('',  Validators.required),
          'MP_Steep_C14' : new FormControl      ('',  Validators.required),
          'MP_Sopt_C15' : new FormControl       ('',  Validators.required),
          'MP_Water_B17' : new FormControl      ('',  Validators.required),
          'MP_WaterRange_C17' : new FormControl  ('',  Validators.required),
          'MP_Dmax_STD_E13' : new FormControl   ('',  Validators.required),
          'MP_Dmax_MOD_E14' : new FormControl   ('',  Validators.required),
          'MP_Sm_E15' : new FormControl         ('',  Validators.required),
          'MP_Dfield_E17' : new FormControl     ('',  Validators.required),
          'MP_E90_G13' : new FormControl        ('',  Validators.required)


    })
  } // cierra constructor



  guardarCambios(){
//Model Parameters - Imputs Usuario
// let MP_Gs_C13:number = this.modelParameters['MP_Gs_C13'];
// let MP_Steep_C14:number = this.modelParameters['MP_Steep_C14'];
// let MP_Sopt_C15:number = this.modelParameters['MP_Sopt_C15'];
// let MP_Water_B17:number = this.modelParameters['MP_Water_B17'];
// let MP_WaterRange_C17:number = this.modelParameters['MP_WaterRange_C17'];
// let MP_Dmax_STD_E13:number = this.modelParameters['MP_Dmax_STD_E13'];
// let MP_Dmax_MOD_E14:number = this.modelParameters['MP_Dmax_MOD_E14'];
// let MP_Sm_E15:number = this.modelParameters['MP_Sm_E15'];
// let MP_Dfield_E17:number = this.modelParameters['MP_Dfield_E17'];
// let MP_E90_G13:number = this.modelParameters['MP_E90_G13'];


// Grilla Y
this.Grilla_Y_Y111 = 73.08; //SI($A111="","",SI(1/($M$64*$A111^2+Y$65*$A111+Y$66)>$L111,$L111*0.9999999,1/($M$64*$A111^2+Y$65*$A111+Y$66)))
this.Grilla_Y_Y112 = 82.33;
this.Grilla_Y_Y113 = 91.76;
this.Grilla_Y_Y114 = 100.64;
this.Grilla_Y_Y115 = 107.95;
this.Grilla_Y_Y116 = 73.08;
this.Grilla_Y_Y117 = 82.33;
this.Grilla_Y_Y118 = 91.76;
this.Grilla_Y_Y119 = 100.64;
this.Grilla_Y_Y120 = 107.95;
this.Grilla_Y_Y121 = 73.08;
this.Grilla_Y_Y122 = 82.33;
this.Grilla_Y_Y123 = 91.76;
this.Grilla_Y_Y124 = 100.64;
this.Grilla_Y_Y125 = 107.95;


// Density
this.Columnas_Density_G129= 75; //INDICE($B$129:$B$143,K.ESIMO.MENOR(SI(H129=$C$129:$C$143,COINCIDIR(FILA($C$129:$C$143),FILA($C$129:$C$143))),SUMA(--(H129=$H$129:H129))))
this.Columnas_Density_G130= 80;
this.Columnas_Density_G131= 90;
this.Columnas_Density_G132= 100;
this.Columnas_Density_G133= 110;
this.Columnas_Density_G134= 100;
this.Columnas_Density_G135= 108;
this.Columnas_Density_G136= 115;
this.Columnas_Density_G137= 125;
this.Columnas_Density_G138= 122;
this.Columnas_Density_G139= 120;
this.Columnas_Density_G140= 124;
this.Columnas_Density_G141= 130;
this.Columnas_Density_G142= 134;
this.Columnas_Density_G143= 132;

// parametros fijos
this.Cero4 = 0.00004;
this.Cero2 = 0.00002;
this.Nove9 = 0.9999999;
this.Cien = 100;

//Model Parameters - Imputs Modelo
this.MP_CM3 = 62.42796;
 
//Model Parameters - Imputs Usuario
this.MP_Gs_C13 = this.modelParameters['MP_Gs_C13'];
this.MP_Steep_C14 = this.modelParameters['MP_Steep_C14'];
this.MP_Sopt_C15 = this.modelParameters['MP_Sopt_C15'];
this.MP_Water_B17 = this.modelParameters['MP_Water_B17'];
this.MP_WaterRange_C17 = this.modelParameters['MP_WaterRange_C17'];
this.MP_Dmax_STD_E13 = this.modelParameters['MP_Dmax_STD_E13'];
this.MP_Dmax_MOD_E14 = this.modelParameters['MP_Dmax_MOD_E14'];
this.MP_Sm_E15 = this.modelParameters['MP_Sm_E15'];
this.MP_Dfield_E17 = this.modelParameters['MP_Dfield_E17'];
this.MP_E90_G13 = this.modelParameters['MP_E90_G13'];

//Project Data - Imputs Usuario
this.PD_Wfield_G20 = 9.5;
this.PD_Dfield_G21 = 125;

//Model Parameters - Resultados
this.MP_Wopt_STDG14 = (this.modelParameters['MP_Sopt_C15']*this.modelParameters['MP_Gs_C13']*this.MP_CM3-this.modelParameters['MP_Sopt_C15']*this.modelParameters['MP_Dmax_STD_E13'])/(this.modelParameters['MP_Gs_C13']*this.modelParameters['MP_Dmax_STD_E13']);
this.MP_Wopt_MOD_G15 = (this.modelParameters['MP_Sopt_C15']*this.modelParameters['MP_Gs_C13']*this.MP_CM3-this.modelParameters['MP_Sopt_C15']*this.modelParameters['MP_Dmax_MOD_E14'])/(this.modelParameters['MP_Gs_C13']*this.modelParameters['MP_Dmax_MOD_E14']);
this.MP_R2_G17 = this.Var_R2_B60;

// Grilla de Celdas
this.Grilla_E_M61 =	1;
this.Grilla_Wopt_M62 =	13.67416569;
this.Grilla_Gmmax_M63 =	113.9285876;
this.Grilla_a_M64 =	0.000036;
this.Grilla_b_M65 =	-0.00098454;
this.Grilla_c_M66 =	0.015508809;
this.Grilla_DMAX_L69 = 134.47172924446;
this.Grilla_H_H129 = 1;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(1:1)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
this.Grilla_H_H134 = 12400;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(8:8)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
this.Grilla_H_H139 = 56000;// =INDICE($C$129:$C$143, COINCIDIR(K.ESIMO.MENOR(CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), FILA(11:11)), CONTAR.SI($C$129:$C$143, "<"&$C$129:$C$143), 0))
this.Grilla_Z_Z61 = this.Grilla_H_H134;
this.Grilla_Z_Z62 = this.MP_Wopt_STDG14;
this.Grilla_Z_Z63 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_Z_Z62*this.Var_Gs_B55+this.Var_Sopt_B54);
this.Grilla_Z_Z65 =	-this.Cero4*this.Grilla_Z_Z62*this.Var_Steep_B53;
this.Grilla_Z_Z66 = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_Z_Z62,2)+(1/this.Grilla_Z_Z63);
this.Grilla_Y_Y61 = this.Grilla_H_H129;
// Grilla_Y_Y62:number = 13.67416569;
this.Grilla_Y_Y62 =this.Var_Woptmin_B52+(this.Var_Woptmax_B51-this.Var_Woptmin_B52)*(Math.pow(10,(-this.Grilla_Y_Y61*this.Var_k_B59)));
this.Grilla_Y_Y63 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_Y_Y62*this.Var_Gs_B55+this.Var_Sopt_B54);
this.Grilla_Y_Y65 =	-this.Cero4*this.Grilla_Y_Y62*this.Var_Steep_B53;
this.Grilla_Y_Y66 = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_Y_Y62,2)+(1/this.Grilla_Y_Y63);

this.Grilla_AA_AA61 = this.Grilla_H_H139;
this.Grilla_AA_AA62 = this.MP_Wopt_MOD_G15;
this.Grilla_AA_AA63 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.Grilla_AA_AA62*this.Var_Gs_B55+this.Var_Sopt_B54);
this.Grilla_AA_AA65 =	-this.Cero4*this.Grilla_AA_AA62*this.Var_Steep_B53;
// =0.00002*$B$53*(AA$62^2)+(1/AA$63)
this.Grilla_AA_AA66 = this.Cero2*this.Var_Steep_B53*Math.pow(this.Grilla_AA_AA62,2)+(1/this.Grilla_AA_AA63);


// (1/($M$64*$A69^2+Z$65*$A69+Z$66)>$L69,$L69*0.9999999,SI(1/($M$64*$A69^2+Z$65*$A69+Z$66)>$Y69,1/($M$64*$A69^2+Z$65*$A69+Z$66),+$Y69))
this.STD1_IF = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Z_Z65*this.W_1_A69+this.Grilla_Z_Z66);
this.STD1_1 = this.Grilla_DMAX_L69*this.Nove9;
this.STD1_IF_prueba = this.W_1_A69+this.Grilla_Z_Z66;


// formulas Field Target - Columna
this.TAR_1_H63 = this.PD_Wfield_G20;
this.TAR_2_I63 = this.PD_Dfield_G21;



if (this.MP_CM3*this.Var_Smax_B56*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Var_Smax_B56)>this.Var_Dmax_B58){this.Grilla_DMAX_L69 = this.Var_Dmax_B58} else {this.Grilla_DMAX_L69 = this.MP_CM3*this.Var_Smax_B56*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Var_Smax_B56)}

// Columna Density I
if (this.Columnas_Density_G129==0){this.Columnas_Density_I129=0} else {this.Columnas_Density_I129=this.Grilla_Y_Y111}
if (this.Columnas_Density_G130==0){this.Columnas_Density_I130=0} else {this.Columnas_Density_I130=this.Grilla_Y_Y112}
if (this.Columnas_Density_G131==0){this.Columnas_Density_I131=0} else {this.Columnas_Density_I131=this.Grilla_Y_Y113}
if (this.Columnas_Density_G132==0){this.Columnas_Density_I132=0} else {this.Columnas_Density_I132=this.Grilla_Y_Y114}
if (this.Columnas_Density_G133==0){this.Columnas_Density_I133=0} else {this.Columnas_Density_I133=this.Grilla_Y_Y115}
if (this.Columnas_Density_G134==0){this.Columnas_Density_I134=0} else {this.Columnas_Density_I134=this.Grilla_Y_Y116}
if (this.Columnas_Density_G135==0){this.Columnas_Density_I135=0} else {this.Columnas_Density_I135=this.Grilla_Y_Y117}
if (this.Columnas_Density_G136==0){this.Columnas_Density_I136=0} else {this.Columnas_Density_I136=this.Grilla_Y_Y118}
if (this.Columnas_Density_G137==0){this.Columnas_Density_I137=0} else {this.Columnas_Density_I137=this.Grilla_Y_Y119}
if (this.Columnas_Density_G138==0){this.Columnas_Density_I138=0} else {this.Columnas_Density_I138=this.Grilla_Y_Y120}
if (this.Columnas_Density_G139==0){this.Columnas_Density_I139=0} else {this.Columnas_Density_I139=this.Grilla_Y_Y121}
if (this.Columnas_Density_G140==0){this.Columnas_Density_I140=0} else {this.Columnas_Density_I140=this.Grilla_Y_Y122}
if (this.Columnas_Density_G141==0){this.Columnas_Density_I141=0} else {this.Columnas_Density_I141=this.Grilla_Y_Y123}
if (this.Columnas_Density_G142==0){this.Columnas_Density_I142=0} else {this.Columnas_Density_I142=this.Grilla_Y_Y124}
if (this.Columnas_Density_G143==0){this.Columnas_Density_I143=0} else {this.Columnas_Density_I143=this.Grilla_Y_Y125}


// Density 2
if (this.Columnas_Density_G129==0){this.Columnas_Density_L129=0} else {this.Columnas_Density_L129=Math.pow(this.Columnas_Density_G129,2)}// // Res 2: 3.688349557 = SI(G129="","",(I129-G129)^2)
if (this.Columnas_Density_G130==0){this.Columnas_Density_L130=0} else {this.Columnas_Density_L130=Math.pow(this.Columnas_Density_G130,2)}
if (this.Columnas_Density_G131==0){this.Columnas_Density_L131=0} else {this.Columnas_Density_L131=Math.pow(this.Columnas_Density_G131,2)}
if (this.Columnas_Density_G132==0){this.Columnas_Density_L132=0} else {this.Columnas_Density_L132=Math.pow(this.Columnas_Density_G132,2)}
if (this.Columnas_Density_G133==0){this.Columnas_Density_L133=0} else {this.Columnas_Density_L133=Math.pow(this.Columnas_Density_G133,2)}
if (this.Columnas_Density_G134==0){this.Columnas_Density_L134=0} else {this.Columnas_Density_L134=Math.pow(this.Columnas_Density_G134,2)}
if (this.Columnas_Density_G135==0){this.Columnas_Density_L135=0} else {this.Columnas_Density_L135=Math.pow(this.Columnas_Density_G135,2)}
if (this.Columnas_Density_G136==0){this.Columnas_Density_L136=0} else {this.Columnas_Density_L136=Math.pow(this.Columnas_Density_G136,2)}
if (this.Columnas_Density_G137==0){this.Columnas_Density_L137=0} else {this.Columnas_Density_L137=Math.pow(this.Columnas_Density_G137,2)}
if (this.Columnas_Density_G138==0){this.Columnas_Density_L138=0} else {this.Columnas_Density_L138=Math.pow(this.Columnas_Density_G138,2)}
if (this.Columnas_Density_G139==0){this.Columnas_Density_L139=0} else {this.Columnas_Density_L139=Math.pow(this.Columnas_Density_G139,2)}
if (this.Columnas_Density_G140==0){this.Columnas_Density_L140=0} else {this.Columnas_Density_L140=Math.pow(this.Columnas_Density_G140,2)}
if (this.Columnas_Density_G141==0){this.Columnas_Density_L141=0} else {this.Columnas_Density_L141=Math.pow(this.Columnas_Density_G141,2)}
if (this.Columnas_Density_G142==0){this.Columnas_Density_L142=0} else {this.Columnas_Density_L142=Math.pow(this.Columnas_Density_G142,2)}
if (this.Columnas_Density_G143==0){this.Columnas_Density_L143=0} else {this.Columnas_Density_L143=Math.pow(this.Columnas_Density_G143,2)}


// Res 2
if (this.Columnas_Density_G129==0){this.Columnas_Res2_J129=0} else {this.Columnas_Res2_J129=Math.pow(this.Columnas_Density_I129-this.Columnas_Density_G129,2)}// // Res 2: 3.688349557 = SI(G129="","",(I129-G129)^2)
if (this.Columnas_Density_G130==0){this.Columnas_Res2_J130=0} else {this.Columnas_Res2_J130=Math.pow((this.Columnas_Density_I130-this.Columnas_Density_G130),2)}
if (this.Columnas_Density_G131==0){this.Columnas_Res2_J131=0} else {this.Columnas_Res2_J131=Math.pow((this.Columnas_Density_I131-this.Columnas_Density_G131),2)}
if (this.Columnas_Density_G132==0){this.Columnas_Res2_J132=0} else {this.Columnas_Res2_J132=Math.pow((this.Columnas_Density_I132-this.Columnas_Density_G132),2)}
if (this.Columnas_Density_G133==0){this.Columnas_Res2_J133=0} else {this.Columnas_Res2_J133=Math.pow((this.Columnas_Density_I133-this.Columnas_Density_G133),2)}
if (this.Columnas_Density_G134==0){this.Columnas_Res2_J134=0} else {this.Columnas_Res2_J134=Math.pow((this.Columnas_Density_I134-this.Columnas_Density_G134),2)}
if (this.Columnas_Density_G135==0){this.Columnas_Res2_J135=0} else {this.Columnas_Res2_J135=Math.pow((this.Columnas_Density_I135-this.Columnas_Density_G135),2)}
if (this.Columnas_Density_G136==0){this.Columnas_Res2_J136=0} else {this.Columnas_Res2_J136=Math.pow((this.Columnas_Density_I136-this.Columnas_Density_G136),2)}
if (this.Columnas_Density_G137==0){this.Columnas_Res2_J137=0} else {this.Columnas_Res2_J137=Math.pow((this.Columnas_Density_I137-this.Columnas_Density_G137),2)}
if (this.Columnas_Density_G138==0){this.Columnas_Res2_J138=0} else {this.Columnas_Res2_J138=Math.pow((this.Columnas_Density_I138-this.Columnas_Density_G138),2)}
if (this.Columnas_Density_G139==0){this.Columnas_Res2_J139=0} else {this.Columnas_Res2_J139=Math.pow((this.Columnas_Density_I139-this.Columnas_Density_G139),2)}
if (this.Columnas_Density_G140==0){this.Columnas_Res2_J140=0} else {this.Columnas_Res2_J140=Math.pow((this.Columnas_Density_I140-this.Columnas_Density_G140),2)}
if (this.Columnas_Density_G141==0){this.Columnas_Res2_J141=0} else {this.Columnas_Res2_J141=Math.pow((this.Columnas_Density_I141-this.Columnas_Density_G141),2)}
if (this.Columnas_Density_G142==0){this.Columnas_Res2_J142=0} else {this.Columnas_Res2_J142=Math.pow((this.Columnas_Density_I142-this.Columnas_Density_G142),2)}
if (this.Columnas_Density_G143==0){this.Columnas_Res2_J143=0} else {this.Columnas_Res2_J143=Math.pow((this.Columnas_Density_I143-this.Columnas_Density_G143),2)}


//celdas
this.Columnas_Density_G144 = this.Columnas_Density_G129+this.Columnas_Density_G130+this.Columnas_Density_G131+this.Columnas_Density_G132+this.Columnas_Density_G133+this.Columnas_Density_G134+this.Columnas_Density_G135+this.Columnas_Density_G136+this.Columnas_Density_G137+this.Columnas_Density_G138+this.Columnas_Density_G139+this.Columnas_Density_G140+this.Columnas_Density_G141+this.Columnas_Density_G142+this.Columnas_Density_G143; //1665 = SUMA(G129:G143)
this.Columnas_Density_G144_Array = [this.Columnas_Density_G129,this.Columnas_Density_G130,this.Columnas_Density_G131,this.Columnas_Density_G132,this.Columnas_Density_G133,this.Columnas_Density_G134,this.Columnas_Density_G135,this.Columnas_Density_G136,this.Columnas_Density_G137,this.Columnas_Density_G138,this.Columnas_Density_G139,this.Columnas_Density_G140,this.Columnas_Density_G141,this.Columnas_Density_G142,this.Columnas_Density_G143];
this.Columnas_Res2_J144 = this.Columnas_Res2_J129+this.Columnas_Res2_J130+this.Columnas_Res2_J131+this.Columnas_Res2_J132+this.Columnas_Res2_J133+this.Columnas_Res2_J134+this.Columnas_Res2_J135+this.Columnas_Res2_J136+this.Columnas_Res2_J137+this.Columnas_Res2_J138+this.Columnas_Res2_J139+this.Columnas_Res2_J140+this.Columnas_Res2_J141+this.Columnas_Res2_J142+this.Columnas_Res2_J143; //85.5 =SUMA(J129:J143)
this.Columnas_Res2_J145 = (this.Columnas_Density_G144_Array.length); // 15 //CONTAR(G129:G143)
this.Columnas_Density2_L144 = this.Columnas_Density_L129+this.Columnas_Density_L130+this.Columnas_Density_L131+this.Columnas_Density_L132+this.Columnas_Density_L133+this.Columnas_Density_L134+this.Columnas_Density_L135+this.Columnas_Density_L136+this.Columnas_Density_L137+this.Columnas_Density_L138+this.Columnas_Density_L139+this.Columnas_Density_L140+this.Columnas_Density_L141+this.Columnas_Density_L142+this.Columnas_Density_L143; //1665 = SUMA(G129:G143)// 189679;//SUMA(L129:L143)

//variables
this.Var_Woptmax_B51 =	13.67;
this.Var_Woptmin_B52 =	7.23;
this.Var_Steep_B53 =	1.80;
this.Var_Sopt_B54 =	77.00;
this.Var_Gs_B55 =	2.70;
this.Var_Smax_B56 =	98.00;
this.Var_Dmin_B57 =	113.9272517;
this.Var_Dmax_B58 =	134.4717292;
this.Var_k_B59 =	0.000033333;
this.Var_E90check_B61 =	30.593;
// this.Var_R2_B60 = 0.982412009;


// Serie A
this.A1 = this.TAR_1_H63;
this.A2 = this.TAR_2_I63;
this.A3 = this.Grilla_Y_Y62;


// Serie B
this.B1 = this.ZER_1_B69;
this.B2 = this.ZER_2_B70;
this.B3 = this.ZER_3_B71;
this.B4 = this.ZER_4_B72;
this.B5 = this.ZER_5_B73;
this.B6 = this.ZER_6_B74;
this.B7 = this.ZER_7_B75;
this.B8 = this.ZER_8_B76;
this.B9 = this.ZER_9_B77;
this.B10 = this.ZER_10_B78;
this.B11 = this.ZER_11_B79;
this.B12 = this.ZER_12_B80;
this.B13 = this.ZER_13_B81;
this.B14 = this.ZER_14_B82;
this.B15 = this.ZER_15_B83;
this.B16 = this.ZER_16_B84;
this.B17 = this.ZER_17_B85;
this.B18 = this.ZER_18_B86;
this.B19 = this.ZER_19_B87;
this.B20 = this.ZER_20_B88;
this.B21 = this.ZER_21_B89;
this.B22 = this.ZER_22_B90;
this.B23 = this.ZER_23_B91;
this.B24 = this.ZER_24_B92;
this.B25 = this.ZER_25_B93;
this.B26 = this.ZER_26_B94;
this.B27 = this.ZER_27_B95;
this.B28 = this.ZER_28_B96;
this.B29 = this.ZER_29_B97;
this.B30 = this.ZER_30_B98;
this.B31 = this.ZER_31_B99;
this.B32 = this.ZER_32_B100;
this.B33 = this.ZER_33_B101;
this.B34 = this.ZER_34_B102;
this.B35 = this.ZER_35_B103;
this.B36 = this.ZER_36_B104;
this.B37 = this.ZER_37_B105;
this.B38 = this.ZER_38_B106;
this.B39 = this.ZER_39_B107;
this.B40 = this.ZER_40_B108;
this.B41 = this.ZER_41_B109;



// Serie C
this.C1 = this.MOD_1_J69;
this.C2 = this.MOD_2_J70;
this.C3 = this.MOD_3_J71;
this.C4 = this.MOD_4_J72;
this.C5 = this.MOD_5_J73;
this.C6 = this.MOD_6_J74;
this.C7 = this.MOD_7_J75;
this.C8 = this.MOD_8_J76;
this.C9 = this.MOD_9_J77;
this.C10 = this.MOD_10_J78;
this.C11 = this.MOD_11_J79;
this.C12 = this.MOD_12_J80;
this.C13 = this.MOD_13_J81;
this.C14 = this.MOD_14_J82;
this.C15 = this.MOD_15_J83;
this.C16 = this.MOD_16_J84;
this.C17 = this.MOD_17_J85;
this.C18 = this.MOD_18_J86;
this.C19 = this.MOD_19_J87;
this.C20 = this.MOD_20_J88;
this.C21 = this.MOD_21_J89;
this.C22 = this.MOD_22_J90;
this.C23 = this.MOD_23_J91;
this.C24 = this.MOD_24_J92;
this.C25 = this.MOD_25_J93;
this.C26 = this.MOD_26_J94;
this.C27 = this.MOD_27_J95;
this.C28 = this.MOD_28_J96;
this.C29 = this.MOD_29_J97;
this.C30 = this.MOD_30_J98;
this.C31 = this.MOD_31_J99;
this.C32 = this.MOD_32_J100;
this.C33 = this.MOD_33_J101;
this.C34 = this.MOD_34_J102;
this.C35 = this.MOD_35_J103;
this.C36 = this.MOD_36_J104;
this.C37 = this.MOD_37_J105;
this.C38 = this.MOD_38_J106;
this.C39 = this.MOD_39_J107;
this.C40 = this.MOD_40_J108;
this.C41 = this.MOD_41_J109;


// Serie D
this.D1 = this.STD_1_I69;
this.D2 = this.STD_2_I70;
this.D3 = this.STD_3_I71;
this.D4 = this.STD_4_I72;
this.D5 = this.STD_5_I73;
this.D6 = this.STD_6_I74;
this.D7 = this.STD_7_I75;
this.D8 = this.STD_8_I76;
this.D9 = this.STD_9_I77;
this.D10 = this.STD_10_I78;
this.D11 = this.STD_11_I79;
this.D12 = this.STD_12_I80;
this.D13 = this.STD_13_I81;
this.D14 = this.STD_14_I82;
this.D15 = this.STD_15_I83;
this.D16 = this.STD_16_I84;
this.D17 = this.STD_17_I85;
this.D18 = this.STD_18_I86;
this.D19 = this.STD_19_I87;
this.D20 = this.STD_20_I88;
this.D21 = this.STD_21_I89;
this.D22 = this.STD_22_I90;
this.D23 = this.STD_23_I91;
this.D24 = this.STD_24_I92;
this.D25 = this.STD_25_I93;
this.D26 = this.STD_26_I94;
this.D27 = this.STD_27_I95;
this.D28 = this.STD_28_I96;
this.D29 = this.STD_29_I97;
this.D30 = this.STD_30_I98;
this.D31 = this.STD_31_I99;
this.D32 = this.STD_32_I100;
this.D33 = this.STD_33_I101;
this.D34 = this.STD_34_I102;
this.D35 = this.STD_35_I103;
this.D36 = this.STD_36_I104;
this.D37 = this.STD_37_I105;
this.D38 = this.STD_38_I106;
this.D39 = this.STD_39_I107;
this.D40 = this.STD_40_I108;
this.D41 = this.STD_41_I109;



// Serie E
this.E1 = this.RED_1_H69;
this.E2 = this.RED_2_H70;
this.E3 = this.RED_3_H71;
this.E4 = this.RED_4_H72;
this.E5 = this.RED_5_H73;
this.E6 = this.RED_6_H74;
this.E7 = this.RED_7_H75;
this.E8 = this.RED_8_H76;
this.E9 = this.RED_9_H77;
this.E10 = this.RED_10_H78;
this.E11 = this.RED_11_H79;
this.E12 = this.RED_12_H80;
this.E13 = this.RED_13_H81;
this.E14 = this.RED_14_H82;
this.E15 = this.RED_15_H83;
this.E16 = this.RED_16_H84;
this.E17 = this.RED_17_H85;
this.E18 = this.RED_18_H86;
this.E19 = this.RED_19_H87;
this.E20 = this.RED_20_H88;
this.E21 = this.RED_21_H89;
this.E22 = this.RED_22_H90;
this.E23 = this.RED_23_H91;
this.E24 = this.RED_24_H92;
this.E25 = this.RED_25_H93;
this.E26 = this.RED_26_H94;
this.E27 = this.RED_27_H95;
this.E28 = this.RED_28_H96;
this.E29 = this.RED_29_H97;
this.E30 = this.RED_30_H98;
this.E31 = this.RED_31_H99;
this.E32 = this.RED_32_H100;
this.E33 = this.RED_33_H101;
this.E34 = this.RED_34_H102;
this.E35 = this.RED_35_H103;
this.E36 = this.RED_36_H104;
this.E37 = this.RED_37_H105;
this.E38 = this.RED_38_H106;
this.E39 = this.RED_39_H107;
this.E40 = this.RED_40_H108;
this.E41 = this.RED_41_H109;


  // Serie F
this.F1 = this.OPT_1_C69;
this.F2 = this.OPT_2_C70;
this.F3 = this.OPT_3_C71;
this.F4 = this.OPT_4_C72;
this.F5 = this.OPT_5_C73;
this.F6 = this.OPT_6_C74;
this.F7 = this.OPT_7_C75;
this.F8 = this.OPT_8_C76;
this.F9 = this.OPT_9_C77;
this.F10 = this.OPT_10_C78;
this.F11 = this.OPT_11_C79;
this.F12 = this.OPT_12_C80;
this.F13 = this.OPT_13_C81;
this.F14 = this.OPT_14_C82;
this.F15 = this.OPT_15_C83;
this.F16 = this.OPT_16_C84;
this.F17 = this.OPT_17_C85;
this.F18 = this.OPT_18_C86;
this.F19 = this.OPT_19_C87;
this.F20 = this.OPT_20_C88;
this.F21 = this.OPT_21_C89;
this.F22 = this.OPT_22_C90;
this.F23 = this.OPT_23_C91;
this.F24 = this.OPT_24_C92;
this.F25 = this.OPT_25_C93;
this.F26 = this.OPT_26_C94;
this.F27 = this.OPT_27_C95;
this.F28 = this.OPT_28_C96;
this.F29 = this.OPT_29_C97;
this.F30 = this.OPT_30_C98;
this.F31 = this.OPT_31_C99;
this.F32 = this.OPT_32_C100;
this.F33 = this.OPT_33_C101;
this.F34 = this.OPT_34_C102;
this.F35 = this.OPT_35_C103;
this.F36 = this.OPT_36_C104;
this.F37 = this.OPT_37_C105;
this.F38 = this.OPT_38_C106;
this.F39 = this.OPT_39_C107;
this.F40 = this.OPT_40_C108;
this.F41 = this.OPT_41_C109;

// W
this.W_1_A69 = 1;
this.W_2_A70 = 1.3;
this.W_3_A71 = 1.6;
this.W_4_A72 = 1.9;
this.W_5_A73 = 2.2;
this.W_6_A74 = 2.5;
this.W_7_A75 = 2.8;
this.W_8_A76 = 3.1;
this.W_9_A77 = 3.4;
this.W_10_A78 = 3.7;
this.W_11_A79 = 4;
this.W_12_A80 = 4.3;
this.W_13_A81 = 4.6;
this.W_14_A82 = 4.9;
this.W_15_A83 = 5.2;
this.W_16_A84 = 5.5;
this.W_17_A85 = 5.8;
this.W_18_A86 = 6.1;
this.W_19_A87 = 6.4;
this.W_20_A88 = 6.7;
this.W_21_A89 = 7;
this.W_22_A90 = 7.3;
this.W_23_A91 = 7.6;
this.W_24_A92 = 7.9;
this.W_25_A93 = 8.2;
this.W_26_A94 = 8.5;
this.W_27_A95 = 8.8;
this.W_28_A96 = 9.1;
this.W_29_A97 = 9.4;
this.W_30_A98 = 9.7;
this.W_31_A99 = 10;
this.W_32_A100 = 10.3;
this.W_33_A101 = 10.6;
this.W_34_A102 = 10.9;
this.W_35_A103 = 11.2;
this.W_36_A104 = 11.5;
this.W_37_A105 = 11.8;
this.W_38_A106 = 12.1;
this.W_39_A107 = 12.4;
this.W_40_A108 = 12.7;
this.W_41_A109 = 13;



//Zero Air
this.ZER_1_B69 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Cien);
this.ZER_2_B70 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_2_A70*this.Var_Gs_B55+this.Cien);
this.ZER_3_B71 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_3_A71*this.Var_Gs_B55+this.Cien);
this.ZER_4_B72 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_4_A72*this.Var_Gs_B55+this.Cien);
this.ZER_5_B73 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_5_A73*this.Var_Gs_B55+this.Cien);
this.ZER_6_B74 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_6_A74*this.Var_Gs_B55+this.Cien);
this.ZER_7_B75 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_7_A75*this.Var_Gs_B55+this.Cien);
this.ZER_8_B76 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_8_A76*this.Var_Gs_B55+this.Cien);
this.ZER_9_B77 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_9_A77*this.Var_Gs_B55+this.Cien);
this.ZER_10_B78 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_10_A78*this.Var_Gs_B55+this.Cien);
this.ZER_11_B79 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_11_A79*this.Var_Gs_B55+this.Cien);
this.ZER_12_B80 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_12_A80*this.Var_Gs_B55+this.Cien);
this.ZER_13_B81 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_13_A81*this.Var_Gs_B55+this.Cien);
this.ZER_14_B82 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_14_A82*this.Var_Gs_B55+this.Cien);
this.ZER_15_B83 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_15_A83*this.Var_Gs_B55+this.Cien);
this.ZER_16_B84 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_16_A84*this.Var_Gs_B55+this.Cien);
this.ZER_17_B85 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_17_A85*this.Var_Gs_B55+this.Cien);
this.ZER_18_B86 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_18_A86*this.Var_Gs_B55+this.Cien);
this.ZER_19_B87 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_19_A87*this.Var_Gs_B55+this.Cien);
this.ZER_20_B88 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_20_A88*this.Var_Gs_B55+this.Cien);
this.ZER_21_B89 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_21_A89*this.Var_Gs_B55+this.Cien);
this.ZER_22_B90 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_22_A90*this.Var_Gs_B55+this.Cien);
this.ZER_23_B91 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_23_A91*this.Var_Gs_B55+this.Cien);
this.ZER_24_B92 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_24_A92*this.Var_Gs_B55+this.Cien);
this.ZER_25_B93 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_25_A93*this.Var_Gs_B55+this.Cien);
this.ZER_26_B94 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_26_A94*this.Var_Gs_B55+this.Cien);
this.ZER_27_B95 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_27_A95*this.Var_Gs_B55+this.Cien);
this.ZER_28_B96 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_28_A96*this.Var_Gs_B55+this.Cien);
this.ZER_29_B97 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_29_A97*this.Var_Gs_B55+this.Cien);
this.ZER_30_B98 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_30_A98*this.Var_Gs_B55+this.Cien);
this.ZER_31_B99 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_31_A99*this.Var_Gs_B55+this.Cien);
this.ZER_32_B100 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_32_A100*this.Var_Gs_B55+this.Cien);
this.ZER_33_B101 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_33_A101*this.Var_Gs_B55+this.Cien);
this.ZER_34_B102 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_34_A102*this.Var_Gs_B55+this.Cien);
this.ZER_35_B103 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_35_A103*this.Var_Gs_B55+this.Cien);
this.ZER_36_B104 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_36_A104*this.Var_Gs_B55+this.Cien);
this.ZER_37_B105 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_37_A105*this.Var_Gs_B55+this.Cien);
this.ZER_38_B106 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_38_A106*this.Var_Gs_B55+this.Cien);
this.ZER_39_B107 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_39_A107*this.Var_Gs_B55+this.Cien);
this.ZER_40_B108 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_40_A108*this.Var_Gs_B55+this.Cien);
this.ZER_41_B109 = this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_41_A109*this.Var_Gs_B55+this.Cien);


// formulas Modified - Columna J
this.MOD_1_J69 = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_AA_AA65*this.W_1_A69+this.Grilla_AA_AA66);
this.MOD_2_J70 = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_AA_AA65*this.W_2_A70+this.Grilla_AA_AA66);
this.MOD_3_J71 = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_AA_AA65*this.W_3_A71+this.Grilla_AA_AA66);
this.MOD_4_J72 = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_AA_AA65*this.W_4_A72+this.Grilla_AA_AA66);
this.MOD_5_J73 = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_AA_AA65*this.W_5_A73+this.Grilla_AA_AA66);
this.MOD_6_J74 = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_AA_AA65*this.W_6_A74+this.Grilla_AA_AA66);
this.MOD_7_J75 = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_AA_AA65*this.W_7_A75+this.Grilla_AA_AA66);
this.MOD_8_J76 = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_AA_AA65*this.W_8_A76+this.Grilla_AA_AA66);
this.MOD_9_J77 = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_AA_AA65*this.W_9_A77+this.Grilla_AA_AA66);
this.MOD_10_J78 = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_AA_AA65*this.W_10_A78+this.Grilla_AA_AA66);
this.MOD_11_J79 = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_AA_AA65*this.W_11_A79+this.Grilla_AA_AA66);
this.MOD_12_J80 = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_AA_AA65*this.W_12_A80+this.Grilla_AA_AA66);
this.MOD_13_J81 = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_AA_AA65*this.W_13_A81+this.Grilla_AA_AA66);
this.MOD_14_J82 = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_AA_AA65*this.W_14_A82+this.Grilla_AA_AA66);
this.MOD_15_J83 = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_AA_AA65*this.W_15_A83+this.Grilla_AA_AA66);
this.MOD_16_J84 = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_AA_AA65*this.W_16_A84+this.Grilla_AA_AA66);
this.MOD_17_J85 = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_AA_AA65*this.W_17_A85+this.Grilla_AA_AA66);
this.MOD_18_J86 = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_AA_AA65*this.W_18_A86+this.Grilla_AA_AA66);
this.MOD_19_J87 = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_AA_AA65*this.W_19_A87+this.Grilla_AA_AA66);
this.MOD_20_J88 = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_AA_AA65*this.W_20_A88+this.Grilla_AA_AA66);
this.MOD_21_J89 = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_AA_AA65*this.W_21_A89+this.Grilla_AA_AA66);
this.MOD_22_J90 = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_AA_AA65*this.W_22_A90+this.Grilla_AA_AA66);
this.MOD_23_J91 = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_AA_AA65*this.W_23_A91+this.Grilla_AA_AA66);
this.MOD_24_J92 = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_AA_AA65*this.W_24_A92+this.Grilla_AA_AA66);
this.MOD_25_J93 = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_AA_AA65*this.W_25_A93+this.Grilla_AA_AA66);
this.MOD_26_J94 = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_AA_AA65*this.W_26_A94+this.Grilla_AA_AA66);
this.MOD_27_J95 = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_AA_AA65*this.W_27_A95+this.Grilla_AA_AA66);
this.MOD_28_J96 = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_AA_AA65*this.W_28_A96+this.Grilla_AA_AA66);
this.MOD_29_J97 = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_AA_AA65*this.W_29_A97+this.Grilla_AA_AA66);
this.MOD_30_J98 = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_AA_AA65*this.W_30_A98+this.Grilla_AA_AA66);
this.MOD_31_J99 = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_AA_AA65*this.W_31_A99+this.Grilla_AA_AA66);
this.MOD_32_J100 = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_AA_AA65*this.W_32_A100+this.Grilla_AA_AA66);
this.MOD_33_J101 = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_AA_AA65*this.W_33_A101+this.Grilla_AA_AA66);
this.MOD_34_J102 = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_AA_AA65*this.W_34_A102+this.Grilla_AA_AA66);
this.MOD_35_J103 = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_AA_AA65*this.W_35_A103+this.Grilla_AA_AA66);
this.MOD_36_J104 = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_AA_AA65*this.W_36_A104+this.Grilla_AA_AA66);
this.MOD_37_J105 = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_AA_AA65*this.W_37_A105+this.Grilla_AA_AA66);
this.MOD_38_J106 = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_AA_AA65*this.W_38_A106+this.Grilla_AA_AA66);
this.MOD_39_J107 = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_AA_AA65*this.W_39_A107+this.Grilla_AA_AA66);
this.MOD_40_J108 = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_AA_AA65*this.W_40_A108+this.Grilla_AA_AA66);
this.MOD_41_J109 = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_AA_AA65*this.W_41_A109+this.Grilla_AA_AA66);

// formulas Standard - Columna I
this.STD_1_I69 = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Z_Z65*this.W_1_A69+this.Grilla_Z_Z66);
this.STD_2_I70 = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_Z_Z65*this.W_2_A70+this.Grilla_Z_Z66);
this.STD_3_I71 = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_Z_Z65*this.W_3_A71+this.Grilla_Z_Z66);
this.STD_4_I72 = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_Z_Z65*this.W_4_A72+this.Grilla_Z_Z66);
this.STD_5_I73 = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_Z_Z65*this.W_5_A73+this.Grilla_Z_Z66);
this.STD_6_I74 = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_Z_Z65*this.W_6_A74+this.Grilla_Z_Z66);
this.STD_7_I75 = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_Z_Z65*this.W_7_A75+this.Grilla_Z_Z66);
this.STD_8_I76 = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_Z_Z65*this.W_8_A76+this.Grilla_Z_Z66);
this.STD_9_I77 = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_Z_Z65*this.W_9_A77+this.Grilla_Z_Z66);
this.STD_10_I78 = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_Z_Z65*this.W_10_A78+this.Grilla_Z_Z66);
this.STD_11_I79 = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_Z_Z65*this.W_11_A79+this.Grilla_Z_Z66);
this.STD_12_I80 = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_Z_Z65*this.W_12_A80+this.Grilla_Z_Z66);
this.STD_13_I81 = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_Z_Z65*this.W_13_A81+this.Grilla_Z_Z66);
this.STD_14_I82 = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_Z_Z65*this.W_14_A82+this.Grilla_Z_Z66);
this.STD_15_I83 = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_Z_Z65*this.W_15_A83+this.Grilla_Z_Z66);
this.STD_16_I84 = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_Z_Z65*this.W_16_A84+this.Grilla_Z_Z66);
this.STD_17_I85 = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_Z_Z65*this.W_17_A85+this.Grilla_Z_Z66);
this.STD_18_I86 = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_Z_Z65*this.W_18_A86+this.Grilla_Z_Z66);
this.STD_19_I87 = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_Z_Z65*this.W_19_A87+this.Grilla_Z_Z66);
this.STD_20_I88 = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_Z_Z65*this.W_20_A88+this.Grilla_Z_Z66);
this.STD_21_I89 = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_Z_Z65*this.W_21_A89+this.Grilla_Z_Z66);
this.STD_22_I90 = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_Z_Z65*this.W_22_A90+this.Grilla_Z_Z66);
this.STD_23_I91 = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_Z_Z65*this.W_23_A91+this.Grilla_Z_Z66);
this.STD_24_I92 = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_Z_Z65*this.W_24_A92+this.Grilla_Z_Z66);
this.STD_25_I93 = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_Z_Z65*this.W_25_A93+this.Grilla_Z_Z66);
this.STD_26_I94 = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_Z_Z65*this.W_26_A94+this.Grilla_Z_Z66);
this.STD_27_I95 = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_Z_Z65*this.W_27_A95+this.Grilla_Z_Z66);
this.STD_28_I96 = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_Z_Z65*this.W_28_A96+this.Grilla_Z_Z66);
this.STD_29_I97 = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_Z_Z65*this.W_29_A97+this.Grilla_Z_Z66);
this.STD_30_I98 = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_Z_Z65*this.W_30_A98+this.Grilla_Z_Z66);
this.STD_31_I99 = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_Z_Z65*this.W_31_A99+this.Grilla_Z_Z66);
this.STD_32_I100 = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_Z_Z65*this.W_32_A100+this.Grilla_Z_Z66);
this.STD_33_I101 = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_Z_Z65*this.W_33_A101+this.Grilla_Z_Z66);
this.STD_34_I102 = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_Z_Z65*this.W_34_A102+this.Grilla_Z_Z66);
this.STD_35_I103 = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_Z_Z65*this.W_35_A103+this.Grilla_Z_Z66);
this.STD_36_I104 = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_Z_Z65*this.W_36_A104+this.Grilla_Z_Z66);
this.STD_37_I105 = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_Z_Z65*this.W_37_A105+this.Grilla_Z_Z66);
this.STD_38_I106 = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_Z_Z65*this.W_38_A106+this.Grilla_Z_Z66);
this.STD_39_I107 = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_Z_Z65*this.W_39_A107+this.Grilla_Z_Z66);
this.STD_40_I108 = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_Z_Z65*this.W_40_A108+this.Grilla_Z_Z66);
this.STD_41_I109 = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_Z_Z65*this.W_41_A109+this.Grilla_Z_Z66);

// formulas Reduced - Columna H
this.RED_1_H69 = 1/(this.Grilla_a_M64*Math.pow(this.W_1_A69,2)+this.Grilla_Y_Y65*this.W_1_A69+this.Grilla_Y_Y66);
this.RED_2_H70 = 1/(this.Grilla_a_M64*Math.pow(this.W_2_A70,2)+this.Grilla_Y_Y65*this.W_2_A70+this.Grilla_Y_Y66);
this.RED_3_H71 = 1/(this.Grilla_a_M64*Math.pow(this.W_3_A71,2)+this.Grilla_Y_Y65*this.W_3_A71+this.Grilla_Y_Y66);
this.RED_4_H72 = 1/(this.Grilla_a_M64*Math.pow(this.W_4_A72,2)+this.Grilla_Y_Y65*this.W_4_A72+this.Grilla_Y_Y66);
this.RED_5_H73 = 1/(this.Grilla_a_M64*Math.pow(this.W_5_A73,2)+this.Grilla_Y_Y65*this.W_5_A73+this.Grilla_Y_Y66);
this.RED_6_H74 = 1/(this.Grilla_a_M64*Math.pow(this.W_6_A74,2)+this.Grilla_Y_Y65*this.W_6_A74+this.Grilla_Y_Y66);
this.RED_7_H75 = 1/(this.Grilla_a_M64*Math.pow(this.W_7_A75,2)+this.Grilla_Y_Y65*this.W_7_A75+this.Grilla_Y_Y66);
this.RED_8_H76 = 1/(this.Grilla_a_M64*Math.pow(this.W_8_A76,2)+this.Grilla_Y_Y65*this.W_8_A76+this.Grilla_Y_Y66);
this.RED_9_H77 = 1/(this.Grilla_a_M64*Math.pow(this.W_9_A77,2)+this.Grilla_Y_Y65*this.W_9_A77+this.Grilla_Y_Y66);
this.RED_10_H78 = 1/(this.Grilla_a_M64*Math.pow(this.W_10_A78,2)+this.Grilla_Y_Y65*this.W_10_A78+this.Grilla_Y_Y66);
this.RED_11_H79 = 1/(this.Grilla_a_M64*Math.pow(this.W_11_A79,2)+this.Grilla_Y_Y65*this.W_11_A79+this.Grilla_Y_Y66);
this.RED_12_H80 = 1/(this.Grilla_a_M64*Math.pow(this.W_12_A80,2)+this.Grilla_Y_Y65*this.W_12_A80+this.Grilla_Y_Y66);
this.RED_13_H81 = 1/(this.Grilla_a_M64*Math.pow(this.W_13_A81,2)+this.Grilla_Y_Y65*this.W_13_A81+this.Grilla_Y_Y66);
this.RED_14_H82 = 1/(this.Grilla_a_M64*Math.pow(this.W_14_A82,2)+this.Grilla_Y_Y65*this.W_14_A82+this.Grilla_Y_Y66);
this.RED_15_H83 = 1/(this.Grilla_a_M64*Math.pow(this.W_15_A83,2)+this.Grilla_Y_Y65*this.W_15_A83+this.Grilla_Y_Y66);
this.RED_16_H84 = 1/(this.Grilla_a_M64*Math.pow(this.W_16_A84,2)+this.Grilla_Y_Y65*this.W_16_A84+this.Grilla_Y_Y66);
this.RED_17_H85 = 1/(this.Grilla_a_M64*Math.pow(this.W_17_A85,2)+this.Grilla_Y_Y65*this.W_17_A85+this.Grilla_Y_Y66);
this.RED_18_H86 = 1/(this.Grilla_a_M64*Math.pow(this.W_18_A86,2)+this.Grilla_Y_Y65*this.W_18_A86+this.Grilla_Y_Y66);
this.RED_19_H87 = 1/(this.Grilla_a_M64*Math.pow(this.W_19_A87,2)+this.Grilla_Y_Y65*this.W_19_A87+this.Grilla_Y_Y66);
this.RED_20_H88 = 1/(this.Grilla_a_M64*Math.pow(this.W_20_A88,2)+this.Grilla_Y_Y65*this.W_20_A88+this.Grilla_Y_Y66);
this.RED_21_H89 = 1/(this.Grilla_a_M64*Math.pow(this.W_21_A89,2)+this.Grilla_Y_Y65*this.W_21_A89+this.Grilla_Y_Y66);
this.RED_22_H90 = 1/(this.Grilla_a_M64*Math.pow(this.W_22_A90,2)+this.Grilla_Y_Y65*this.W_22_A90+this.Grilla_Y_Y66);
this.RED_23_H91 = 1/(this.Grilla_a_M64*Math.pow(this.W_23_A91,2)+this.Grilla_Y_Y65*this.W_23_A91+this.Grilla_Y_Y66);
this.RED_24_H92 = 1/(this.Grilla_a_M64*Math.pow(this.W_24_A92,2)+this.Grilla_Y_Y65*this.W_24_A92+this.Grilla_Y_Y66);
this.RED_25_H93 = 1/(this.Grilla_a_M64*Math.pow(this.W_25_A93,2)+this.Grilla_Y_Y65*this.W_25_A93+this.Grilla_Y_Y66);
this.RED_26_H94 = 1/(this.Grilla_a_M64*Math.pow(this.W_26_A94,2)+this.Grilla_Y_Y65*this.W_26_A94+this.Grilla_Y_Y66);
this.RED_27_H95 = 1/(this.Grilla_a_M64*Math.pow(this.W_27_A95,2)+this.Grilla_Y_Y65*this.W_27_A95+this.Grilla_Y_Y66);
this.RED_28_H96 = 1/(this.Grilla_a_M64*Math.pow(this.W_28_A96,2)+this.Grilla_Y_Y65*this.W_28_A96+this.Grilla_Y_Y66);
this.RED_29_H97 = 1/(this.Grilla_a_M64*Math.pow(this.W_29_A97,2)+this.Grilla_Y_Y65*this.W_29_A97+this.Grilla_Y_Y66);
this.RED_30_H98 = 1/(this.Grilla_a_M64*Math.pow(this.W_30_A98,2)+this.Grilla_Y_Y65*this.W_30_A98+this.Grilla_Y_Y66);
this.RED_31_H99 = 1/(this.Grilla_a_M64*Math.pow(this.W_31_A99,2)+this.Grilla_Y_Y65*this.W_31_A99+this.Grilla_Y_Y66);
this.RED_32_H100 = 1/(this.Grilla_a_M64*Math.pow(this.W_32_A100,2)+this.Grilla_Y_Y65*this.W_32_A100+this.Grilla_Y_Y66);
this.RED_33_H101 = 1/(this.Grilla_a_M64*Math.pow(this.W_33_A101,2)+this.Grilla_Y_Y65*this.W_33_A101+this.Grilla_Y_Y66);
this.RED_34_H102 = 1/(this.Grilla_a_M64*Math.pow(this.W_34_A102,2)+this.Grilla_Y_Y65*this.W_34_A102+this.Grilla_Y_Y66);
this.RED_35_H103 = 1/(this.Grilla_a_M64*Math.pow(this.W_35_A103,2)+this.Grilla_Y_Y65*this.W_35_A103+this.Grilla_Y_Y66);
this.RED_36_H104 = 1/(this.Grilla_a_M64*Math.pow(this.W_36_A104,2)+this.Grilla_Y_Y65*this.W_36_A104+this.Grilla_Y_Y66);
this.RED_37_H105 = 1/(this.Grilla_a_M64*Math.pow(this.W_37_A105,2)+this.Grilla_Y_Y65*this.W_37_A105+this.Grilla_Y_Y66);
this.RED_38_H106 = 1/(this.Grilla_a_M64*Math.pow(this.W_38_A106,2)+this.Grilla_Y_Y65*this.W_38_A106+this.Grilla_Y_Y66);
this.RED_39_H107 = 1/(this.Grilla_a_M64*Math.pow(this.W_39_A107,2)+this.Grilla_Y_Y65*this.W_39_A107+this.Grilla_Y_Y66);
this.RED_40_H108 = 1/(this.Grilla_a_M64*Math.pow(this.W_40_A108,2)+this.Grilla_Y_Y65*this.W_40_A108+this.Grilla_Y_Y66);
this.RED_41_H109 = 1/(this.Grilla_a_M64*Math.pow(this.W_41_A109,2)+this.Grilla_Y_Y65*this.W_41_A109+this.Grilla_Y_Y66);

// formulas Optimus - Columna C
this.OPT_1_C69 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_2_C70 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_2_A70*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_3_C71 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_3_A71*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_4_C72 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_4_A72*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_5_C73 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_5_A73*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_6_C74 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_6_A74*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_7_C75 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_7_A75*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_8_C76 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_8_A76*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_9_C77 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_9_A77*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_10_C78 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_10_A78*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_11_C79 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_11_A79*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_12_C80 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_12_A80*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_13_C81 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_13_A81*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_14_C82 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_14_A82*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_15_C83 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_15_A83*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_16_C84 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_16_A84*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_17_C85 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_17_A85*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_18_C86 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_18_A86*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_19_C87 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_19_A87*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_20_C88 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_20_A88*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_21_C89 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_21_A89*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_22_C90 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_22_A90*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_23_C91 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_23_A91*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_24_C92 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_24_A92*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_25_C93 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_25_A93*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_26_C94 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_26_A94*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_27_C95 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_27_A95*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_28_C96 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_28_A96*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_29_C97 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_29_A97*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_30_C98 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_30_A98*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_31_C99 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_31_A99*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_32_C100 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_32_A100*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_33_C101 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_33_A101*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_34_C102 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_34_A102*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_35_C103 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_35_A103*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_36_C104 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_36_A104*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_37_C105 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_37_A105*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_38_C106 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_38_A106*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_39_C107 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_39_A107*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_40_C108 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_40_A108*this.Var_Gs_B55+this.Var_Sopt_B54);
this.OPT_41_C109 = this.MP_CM3*this.Var_Sopt_B54*this.Var_Gs_B55/(this.W_41_A109*this.Var_Gs_B55+this.Var_Sopt_B54);




// R2

if (this.Columnas_Density_G144>1){this.Var_R2_B60=1-this.Columnas_Res2_J144/(this.Columnas_Density2_L144-(Math.pow(this.Columnas_Density_G144,2)/this.Columnas_Res2_J145))} else { this.Var_R2_B60=0}// SI(G144>1,1-J144/(L144-(G144^2/J145)),"")

this.prueba=this.MP_CM3*this.Cien*this.Var_Gs_B55/(this.W_1_A69*this.Var_Gs_B55+this.Cien);

// this.Grilla_Y_Y111.toFixed();

  //   } //cierra constructor

  // guardarCambios(){

    console.log(this.forma.value.MP_Gs_C13);
    // console.log(this.forma);
    // let MP_Gs_C13:number = this.forma.value['MP_Gs_C13'];

//Model Parameters - Imputs Usuario
this.MP_Gs_C13 = this.modelParameters['MP_Gs_C13'];
this.MP_Steep_C14 = this.modelParameters['MP_Steep_C14'];
this.MP_Sopt_C15  =  this.modelParameters['MP_Sopt_C15'];
this.MP_Water_B17  = this.modelParameters['MP_Water_B17'];
this.MP_WaterRange_C17 = this.modelParameters['MP_WaterRange_C17'];
this.MP_Dmax_STD_E13 = this.modelParameters['MP_Dmax_STD_E13'];
this.MP_Dmax_MOD_E14 = this.modelParameters['MP_Dmax_MOD_E14'];
this.MP_Sm_E15 = this.modelParameters['MP_Sm_E15'];
this.MP_Dfield_E17 = this.modelParameters['MP_Dfield_E17'];
this.MP_E90_G13 = this.modelParameters['MP_E90_G13'];




this.createChart();



  this.lineChartDataB = [
    {data: [this.B1,this.B2,this.B3,this.B4,this.B5,this.B6,this.B7,this.B8,this.B9,this.B10,this.B11,this.B12,this.B13,this.B14,this.B15,this.B16,this.B17,this.B18,this.B19,this.B20,this.B21,this.B22,this.B23,this.B24,this.B25,this.B26,this.B27,this.B28,this.B29,this.B30,this.B31,this.B32,this.B33,this.B34,this.B35,this.B36,this.B37,this.B38,this.B39,this.B40,this.B41],
     label: 'Zero Air Voids',
     borderColor: "#6600FF",
     fill: false
    }
  ];

  this.lineChartDataC = [
    {data: [this.C1,this.C2,this.C3,this.C4,this.C5,this.C6,this.C7,this.C8,this.C9,this.C10,this.C11,this.C12,this.C13,this.C14,this.C15,this.C16,this.C17,this.C18,this.C19,this.C20,this.C21,this.C22,this.C23,this.C24,this.C25,this.C26,this.C27,this.C28,this.C29,this.C30,this.C31,this.C32,this.C33,this.C34,this.C35,this.C36,this.C37,this.C38,this.C39,this.C40,this.C41],
     label: 'Modifed',
     borderColor: "#FF9900",
     fill: false
    }
  ];

  this.lineChartDataD = [
    {data: [this.D1,this.D2,this.D3,this.D4,this.D5,this.D6,this.D7,this.D8,this.D9,this.D10,this.D11,this.D12,this.D13,this.D14,this.D15,this.D16,this.D17,this.D18,this.D19,this.D20,this.D21,this.D22,this.D23,this.D24,this.D25,this.D26,this.D27,this.D28,this.D29,this.D30,this.D31,this.D32,this.D33,this.D34,this.D35,this.D36,this.D37,this.D38,this.D39,this.D40,this.D41],
    label: 'Standard',
    borderColor: "#009900",
    fill: false
    }
  ];

  this.lineChartDataE = [
    {data: [this.E1,this.E2,this.E3,this.E4,this.E5,this.E6,this.E7,this.E8,this.E9,this.E10,this.E11,this.E12,this.E13,this.E14,this.E15,this.E16,this.E17,this.E18,this.E19,this.E20,this.E21,this.E22,this.E23,this.E24,this.E25,this.E26,this.E27,this.E28,this.E29,this.E30,this.E31,this.E32,this.E33,this.E34,this.E35,this.E36,this.E37,this.E38,this.E39,this.E40,this.E41],
    label: 'Reduce',
    borderColor: "#FF0000",
    fill: false
    }
  ];

  this.lineChartDataF = [
    {data: [this.F1,this.F2,this.F3,this.F4,this.F5,this.F6,this.F7,this.F8,this.F9,this.F10,this.F11,this.F12,this.F13,this.F14,this.F15,this.F16,this.F17,this.F18,this.F19,this.F20,this.F21,this.F22,this.F23,this.F24,this.F25,this.F26,this.F27,this.F28,this.F29,this.F30,this.F31,this.F32,this.F33,this.F34,this.F35,this.F36,this.F37,this.F38,this.F39,this.F40,this.F41],
    label: 'Line of Optimus',
    borderColor: "#606060",
    fill: false
    }
  ];



  // lineChart
   this.lineChartData = [
    //  {data: [this.A1,this.A2], label: 'Field Target'},
     {data: [this.B1,this.B2,this.B3,this.B4,this.B5,this.B6,this.B7,this.B8,this.B9,this.B10,this.B11,this.B12,this.B13,this.B14,this.B15,this.B16,this.B17,this.B18,this.B19,this.B20,this.B21,this.B22,this.B23,this.B24,this.B25,this.B26,this.B27,this.B28,this.B29,this.B30,this.B31,this.B32,this.B33,this.B34,this.B35,this.B36,this.B37,this.B38,this.B39,this.B40,this.B41],
      label: 'Zero Air Voids',
      borderColor: "#3cba9f",
      fill: false},
     {data: [this.C1,this.C2,this.C3,this.C4,this.C5,this.C6,this.C7,this.C8,this.C9,this.C10,this.C11,this.C12,this.C13,this.C14,this.C15,this.C16,this.C17,this.C18,this.C19,this.C20,this.C21,this.C22,this.C23,this.C24,this.C25,this.C26,this.C27,this.C28,this.C29,this.C30,this.C31,this.C32,this.C33,this.C34,this.C35,this.C36,this.C37,this.C38,this.C39,this.C40,this.C41],
      label: 'Modifed',
      borderColor: "#3cba9f",
      fill: false},
     {data: [this.D1,this.D2,this.D3,this.D4,this.D5,this.D6,this.D7,this.D8,this.D9,this.D10,this.D11,this.D12,this.D13,this.D14,this.D15,this.D16,this.D17,this.D18,this.D19,this.D20,this.D21,this.D22,this.D23,this.D24,this.D25,this.D26,this.D27,this.D28,this.D29,this.D30,this.D31,this.D32,this.D33,this.D34,this.D35,this.D36,this.D37,this.D38,this.D39,this.D40,this.D41],
      label: 'Standard',
      borderColor: "#3cba9f",
      fill: false},
     {data: [this.E1,this.E2,this.E3,this.E4,this.E5,this.E6,this.E7,this.E8,this.E9,this.E10,this.E11,this.E12,this.E13,this.E14,this.E15,this.E16,this.E17,this.E18,this.E19,this.E20,this.E21,this.E22,this.E23,this.E24,this.E25,this.E26,this.E27,this.E28,this.E29,this.E30,this.E31,this.E32,this.E33,this.E34,this.E35,this.E36,this.E37,this.E38,this.E39,this.E40,this.E41],
      label: 'Reduce',
      borderColor: "#3cba9f",
      fill: false},
     {data: [this.F1,this.F2,this.F3,this.F4,this.F5,this.F6,this.F7,this.F8,this.F9,this.F10,this.F11,this.F12,this.F13,this.F14,this.F15,this.F16,this.F17,this.F18,this.F19,this.F20,this.F21,this.F22,this.F23,this.F24,this.F25,this.F26,this.F27,this.F28,this.F29,this.F30,this.F31,this.F32,this.F33,this.F34,this.F35,this.F36,this.F37,this.F38,this.F39,this.F40,this.F41],
      label: 'Line of Optimus',
      borderColor: "#3cba9f",
      fill: false}
     // ,
     // {data: [this.G1,this.G2,this.G3,this.G4,this.G5,this.G6,this.G7,this.G8,this.G9,this.G10,this.G11,this.G12,this.G13,this.G14,this.G15,this.G16,this.G17,this.G18,this.G19,this.G20,this.G21,this.G22,this.G23,this.G24,this.G25,this.G26,this.G27,this.G28,this.G29,this.G30,this.G31,this.G32,this.G33,this.G34,this.G35,this.G36,this.G37,this.G38,this.G39,this.G40,this.G41], label: 'Water Content (%)'}
   ];

  } //cierra guardar cambios

  //  public lineChartOptions:any = {
  //      responsive: true
  //    };

  //  public lineChartColors:Array<any> = [
  //   //  { // A
  //   //    backgroundColor: 'rgba(194,0,255,0)',
  //   //    borderColor: 'rgba(194,0,255,1)',
  //   //   //  pointBackgroundColor: '#C200FF',
  //   //   //  pointBorderColor: '#C200FF',
  //   //    pointHoverBackgroundColor: '#200FF',
  //   //    pointHoverBorderColor: '#C200FF'
  //   //  },
  //    { // B
  //      backgroundColor: 'rgba(102,0,255,0)',
  //      borderColor: 'rgba(102,0,255,1)',
  //     //  pointBackgroundColor: '#6600FF',
  //     //  pointBorderColor: '#6600FF',
  //      pointHoverBackgroundColor:  '#6600FF',
  //      pointHoverBorderColor:  '#6600FF'
  //    },
  //    { // C
  //      backgroundColor: 'rgba(255,204,0,0)',
  //      borderColor: 'rgba(255,153,0,1)',
  //     //  pointBackgroundColor:  '#FF9900',
  //     //  pointBorderColor: '#FF9900',
  //      pointHoverBackgroundColor: '#FF9900',
  //      pointHoverBorderColor:  '#FF9900'
  //    },
  //    { // D
  //     backgroundColor: 'rgba(0,128,0,0)',
  //     borderColor: 'rgba(0,153,0,1)',
  //     // pointBackgroundColor: '#009900',
  //     // pointBorderColor: '#009900',
  //     pointHoverBackgroundColor: '#009900',
  //     pointHoverBorderColor:  '#009900'
  //   },
  //    { // E
  //      backgroundColor: 'rgba(255,69,0,0)',
  //      borderColor: 'rgba(255,69,0,1)',
  //     //  pointBackgroundColor: '#FF0000',
  //     //  pointBorderColor: '#FF0000',
  //      pointHoverBackgroundColor: '#FF0000',
  //      pointHoverBorderColor: '#FF0000'
  //    },
  //    { // F
  //      backgroundColor: 'rgba(96,96,96,0)',
  //      borderColor: 'rgba(96,96,96,1)',
  //     //  pointBackgroundColor:'#606060',
  //     //  pointBorderColor: '#606060',
  //      pointHoverBackgroundColor: '#606060',
  //      pointHoverBorderColor: '#606060'
  //    },
  //  ];

  //  public lineChartLegend:boolean = true;
  //  public lineChartType:string = 'line';


//  // events
//  public chartClicked(e:any):void {
//    console.log(e);
//  }

//  public chartHovered(e:any):void {
//    console.log(e);
//  }

//  public serie:string[] = ['1',1.3,1.6,1.9, 2.2,2.5, 2.8, 3.1,3.4, 3.7, 4, 4.3,4.6, 4.9, 5.2, 5.5, 5.8,6.1,6.4, 6.7, 7, 7.3, 7.6, 7.9, 8.2, 8.5, 8.8, 9.1, 9.4, 9.7, 10,10.3,10.6,10.9,11.2, 11.5, 11.8, 12.1,12.4,12.7,13];

// public serie:number[] = [1,1.3,1.6,1.9, 2.2,2.5, 2.8, 3.1,3.4, 3.7, 4, 4.3,4.6, 4.9, 5.2, 5.5, 5.8,6.1,6.4, 6.7, 7, 7.3, 7.6, 7.9, 8.2, 8.5, 8.8, 9.1, 9.4, 9.7, 10,10.3,10.6,10.9,11.2, 11.5, 11.8, 12.1,12.4,12.7,13];

  createChart() {   
    this.myChart = new Chart(this.chartcanvas.nativeElement, {
        type: 'line',
        data: {
          // labels:Number [ this.W_1_A69,this.W_2_A70,this.W_3_A71,this.W_4_A72,this.W_5_A73,this.W_6_A74,this.W_7_A75,this.W_8_A76,this.W_9_A77,this.W_10_A78,this.W_11_A79,this.W_12_A80,this.W_13_A81,this.W_14_A82,this.W_15_A83,this.W_16_A84,this.W_17_A85,this.W_18_A86,this.W_19_A87,this.W_20_A88,this.W_21_A89,this.W_22_A90,this.W_23_A91,this.W_24_A92,this.W_25_A93,this.W_26_A94,this.W_27_A95,this.W_28_A96,this.W_29_A97,this.W_30_A98,this.W_31_A99,this.W_32_A100,this.W_33_A101,this.W_34_A102,this.W_35_A103,this.W_36_A104,this.W_37_A105,this.W_38_A106,this.W_39_A107,this.W_40_A108,this.W_41_A109 ],
          // labels: [1,1.3,1.6,1.9, 2.2,2.5, 2.8, 3.1,3.4, 3.7, 4, 4.3,4.6, 4.9, 5.2, 5.5, 5.8,6.1,6.4, 6.7, 7, 7.3, 7.6, 7.9, 8.2, 8.5, 8.8, 9.1, 9.4, 9.7, 10,10.3,10.6,10.9,11.2, 11.5, 11.8, 12.1,12.4,12.7,13],
          labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13'],
          // labels: this.serie,
          datasets: [{ 
            data: [this.B1,this.B2,this.B3,this.B4,this.B5,this.B6,this.B7,this.B8,this.B9,this.B10,this.B11,this.B12,this.B13,this.B14,this.B15,this.B16,this.B17,this.B18,this.B19,this.B20,this.B21,this.B22,this.B23,this.B24,this.B25,this.B26,this.B27,this.B28,this.B29,this.B30,this.B31,this.B32,this.B33,this.B34,this.B35,this.B36,this.B37,this.B38,this.B39,this.B40,this.B41],
            label: 'Zero Air Voids',
            borderColor: "#6600FF",
            fill: false,
            pointRadius: 0
          },
          {
            data: [this.C1,this.C2,this.C3,this.C4,this.C5,this.C6,this.C7,this.C8,this.C9,this.C10,this.C11,this.C12,this.C13,this.C14,this.C15,this.C16,this.C17,this.C18,this.C19,this.C20,this.C21,this.C22,this.C23,this.C24,this.C25,this.C26,this.C27,this.C28,this.C29,this.C30,this.C31,this.C32,this.C33,this.C34,this.C35,this.C36,this.C37,this.C38,this.C39,this.C40,this.C41],
            label: 'Modifed',
            borderColor: "#FF9900",
            fill: false,
            pointRadius: 0     
          },
          {
            data: [this.D1,this.D2,this.D3,this.D4,this.D5,this.D6,this.D7,this.D8,this.D9,this.D10,this.D11,this.D12,this.D13,this.D14,this.D15,this.D16,this.D17,this.D18,this.D19,this.D20,this.D21,this.D22,this.D23,this.D24,this.D25,this.D26,this.D27,this.D28,this.D29,this.D30,this.D31,this.D32,this.D33,this.D34,this.D35,this.D36,this.D37,this.D38,this.D39,this.D40,this.D41],
            label: 'Standard',
            borderColor: "#009900",
            fill: false,
            pointRadius: 0     
          },
          {
            data: [this.E1,this.E2,this.E3,this.E4,this.E5,this.E6,this.E7,this.E8,this.E9,this.E10,this.E11,this.E12,this.E13,this.E14,this.E15,this.E16,this.E17,this.E18,this.E19,this.E20,this.E21,this.E22,this.E23,this.E24,this.E25,this.E26,this.E27,this.E28,this.E29,this.E30,this.E31,this.E32,this.E33,this.E34,this.E35,this.E36,this.E37,this.E38,this.E39,this.E40,this.E41],
            label: 'Reduce',
            borderColor: "#FF0000",
            fill: false,
            pointRadius: 0     
          },
          {
            data: [this.F1,this.F2,this.F3,this.F4,this.F5,this.F6,this.F7,this.F8,this.F9,this.F10,this.F11,this.F12,this.F13,this.F14,this.F15,this.F16,this.F17,this.F18,this.F19,this.F20,this.F21,this.F22,this.F23,this.F24,this.F25,this.F26,this.F27,this.F28,this.F29,this.F30,this.F31,this.F32,this.F33,this.F34,this.F35,this.F36,this.F37,this.F38,this.F39,this.F40,this.F41],
            label: 'Line of Optimus',
            borderColor: "#606060",
            fill: false,
            pointRadius: 0     
          }
        ]},
        options: {
          title: {
            display: true,
            text: '3D Compaction Forestcast'
          }
        }
      });
    }

    
 }
