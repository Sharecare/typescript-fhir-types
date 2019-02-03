
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';

        

        /**
         * Todo. 
         */
        export class SubstanceReferenceInformation_Relationship  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Todo.
                 */
                SubstanceReference? : Reference;
                

                /**
                 * Todo.
                 */
                SubstanceCodeableConcept? : CodeableConcept;
                

                /**
                 * Todo.
                 */
                Relationship? : CodeableConcept;
                

                /**
                 * Todo.
                 */
                Interaction? : CodeableConcept;
                

                /**
                 * Todo.
                 */
                IsDefining? : Boolean;
                

                /**
                 * Extensions for isDefining
                 */
                _isDefining? : Element;
                

                /**
                 * Todo.
                 */
                AmountQuantity? : Quantity;
                

                /**
                 * Todo.
                 */
                AmountRange? : Range;
                

                /**
                 * Todo.
                 */
                AmountString? : String;
                

                /**
                 * Extensions for amountString
                 */
                _amountString? : Element;
                

                /**
                 * Todo.
                 */
                AmountType? : CodeableConcept;
                

                /**
                 * Todo.
                 */
                AmountText? : String;
                

                /**
                 * Extensions for amountText
                 */
                _amountText? : Element;
                

                /**
                 * Todo.
                 */
                Source? : Array<Reference>;
                
        }
        