import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { CommonModule } from '@angular/common';
import { ClassNamePorValorPipe, ClassNameDeValor } from '../../pipes/class-name-por-valor.pipe';
import { MensagemDeMouseOverDirective } from '../../directives/mensagem-de-mouse-over.directive';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [
    CommonModule,
    ClassNamePorValorPipe,
    MensagemDeMouseOverDirective,
  ],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css'
})
export class ConsultaSaldoComponent {

  public cliente: Cliente = new Cliente(
    'Maria das Couves',
    99.99,
    new Date(),
  );

  public creditoPreAprovadoClasses: ClassNameDeValor = {
    zero: 'zero',
    positivo: 'positivo destaque',
    negativo: 'negativo',
  };

};

