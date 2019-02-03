
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        export enum Linkage_ItemTypeKind {
                source,
alternate,
historical
            }

        /**
         * Identifies two or more records (resource instances) that are referring to the same real-world "occurrence". 
         */
        export class Linkage_Item  {

            constructor() {
                this.Resource = new Reference();
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
                 * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
                 */
                Type? : Linkage_ItemTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * The resource instance being linked as part of the group.
                 */
                Resource : Reference;
                
        }
        