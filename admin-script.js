// // jQuery(document).ready(function ($) {
// //   $("#crfb-field-palette li").draggable({ helper: "clone" });
// //   $("#crfb-canvas-fields").sortable();

// //   $("#crfb-form-canvas").droppable({
// //     accept: "#crfb-field-palette li",
// //     drop: function (event, ui) {
// //       var fieldType = ui.helper.data("type");
// //       var newField = $("<li>")
// //         .addClass("crfb-field")
// //         .attr("data-type", fieldType)
// //         .attr("data-placeholder", "")
// //         .attr("data-required", false);

// //       newField.append(
// //         "<span>" +
// //           fieldType.charAt(0).toUpperCase() +
// //           fieldType.slice(1) +
// //           " Field</span>"
// //       );

// //       if (fieldType !== "email") {
// //         newField.append(
// //           '<span class="crfb-delete dashicons dashicons-no"></span>'
// //         );
// //       }

// //       $("#crfb-canvas-fields").append(newField);
// //       updateLivePreview();
// //     },
// //   });

// //   $(document).on("click", ".crfb-delete", function () {
// //     $(this).parent().remove();
// //     updateLivePreview();
// //   });

// //   $(document).on("click", ".crfb-field", function () {
// //     openFieldEditor($(this));
// //   });

// //   function updateLivePreview() {
// //     var preview = $("#crfb-live-preview");
// //     preview.empty();

// //     $("#crfb-canvas-fields .crfb-field").each(function () {
// //       var fieldType = $(this).data("type");
// //       var placeholder = $(this).data("placeholder");
// //       var required = $(this).data("required") ? "required" : "";

// //       var label = `<label>${
// //         placeholder || fieldType.charAt(0).toUpperCase() + fieldType.slice(1)
// //       }:</label>`;

// //       var fieldHtml;
// //       switch (fieldType) {
// //         case "text":
// //           fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
// //           break;
// //         case "number":
// //           fieldHtml = `<input type="number" placeholder="${placeholder}" ${required} />`;
// //           break;
// //         case "textarea":
// //           fieldHtml = `<textarea placeholder="${placeholder}" ${required}></textarea>`;
// //           break;
// //         case "email":
// //           fieldHtml = `<input type="email" placeholder="${placeholder}" ${required} />`;
// //           break;
// //         case "select":
// //           fieldHtml = `<select ${required}><option>${
// //             placeholder || "Select an option"
// //           }</option></select>`;
// //           break;
// //         case "checkbox":
// //           fieldHtml = `<input type="checkbox" ${required}> ${placeholder}`;
// //           break;
// //         case "radio":
// //           fieldHtml = `<input type="radio" ${required}> ${placeholder}`;
// //           break;
// //         case "password":
// //           fieldHtml = `<input type="password" placeholder="${placeholder}" ${required} />`;
// //           break;
// //         case "date":
// //           fieldHtml = `<input type="date" ${required} />`;
// //           break;
// //         case "time":
// //           fieldHtml = `<input type="time" ${required} />`;
// //           break;
// //         case "file":
// //           fieldHtml = `<input type="file" ${required} />`;
// //           break;
// //         default:
// //           fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
// //       }

// //       var iconsHtml = `
// //         <div class="form-field">
// //           <span class="icon-button">
// //             <i class="dashicons dashicons-edit"></i>
// //           </span>
// //           <span class="icon-button">
// //             <i class="dashicons dashicons-admin-page"></i>
// //           </span>
// //           <span class="icon-button">
// //             <i class="dashicons dashicons-trash"></i>
// //           </span>
// //         </div>`;

// //       preview.append(
// //         `<div class="preview-field">${label} ${fieldHtml} ${iconsHtml}</div>`
// //       );
// //     });
// //   }

// //   function openFieldEditor(field) {
// //     $(".field-editor").remove();
// //     var editor = $("<div>").addClass("field-editor");

// //     editor.html(`
// //       <label>Placeholder: <input type="text" class="field-placeholder" value="${
// //         field.data("placeholder") || ""
// //       }"></label>
// //       <label>Required: <input type="checkbox" class="field-required" ${
// //         field.data("required") ? "checked" : ""
// //       }></label>
// //       <button class="save-field">Save</button>
// //       <button class="close-editor">Close</button>
// //     `);

// //     field.append(editor);

// //     editor.find(".field-placeholder").on("input", function () {
// //       field.data("placeholder", $(this).val());
// //     });

// //     editor.find(".field-required").on("change", function () {
// //       field.data("required", $(this).is(":checked"));
// //     });

// //     editor.find(".save-field").on("click", function () {
// //       updateLivePreview();
// //       editor.remove();
// //     });

// //     editor.find(".close-editor").on("click", function () {
// //       editor.remove();
// //     });
// //   }

// //   $("#crfb-save-form").on("click", function () {
// //     var formFields = [];
// //     $("#crfb-canvas-fields .crfb-field").each(function () {
// //       formFields.push({
// //         type: $(this).data("type"),
// //         placeholder: $(this).data("placeholder"),
// //         required: $(this).data("required"),
// //       });
// //     });
// //     $.post(crfb_vars.ajaxurl, {
// //       action: "crfb_save_form",
// //       form_fields: formFields,
// //       nonce: crfb_vars.nonce,
// //     }).done(function (response) {
// //       alert(response.data.message);
// //     });
// //   });

// //   $("#crfb-reset-form").click(function () {
// //     if (
// //       confirm(
// //         "Are you sure you want to reset the form? All fields will be cleared."
// //       )
// //     ) {
// //       $("#crfb-canvas-fields").children().not(":first").remove();
// //       $("#crfb-live-preview").empty();
// //     }
// //   });
// // });

// jQuery(document).ready(function ($) {
//   // Make available fields draggable
//   $("#crfb-field-palette li").draggable({ helper: "clone" });
//   $("#crfb-canvas-fields").sortable();

//   // Form canvas droppable to accept draggable fields
//   $("#crfb-form-canvas").droppable({
//     accept: "#crfb-field-palette li",
//     drop: function (event, ui) {
//       var fieldType = ui.helper.data("type");
//       var newField = $("<li>")
//         .addClass("crfb-field")
//         .attr("data-type", fieldType)
//         .attr("data-placeholder", "")
//         .attr("data-required", false);

//       newField.append(
//         `<span class="field-label">${
//           fieldType.charAt(0).toUpperCase() + fieldType.slice(1)
//         } Field</span>`
//       );

//       // Add delete and move icons, with delete restriction for default email field
//       if (fieldType !== "email") {
//         newField.append(
//           '<span class="crfb-delete dashicons dashicons-no"></span>'
//         );
//       } else {
//         newField.addClass("default-email");
//       }
//       newField.append(
//         '<span class="crfb-move dashicons dashicons-move"></span>'
//       );

//       // Append the new field to the canvas and update preview
//       $("#crfb-canvas-fields").append(newField);
//       updateLivePreview();
//     },
//   });

//   // Delete field on click, excluding default email field
//   $(document).on("click", ".crfb-delete", function () {
//     if (!$(this).parent().hasClass("default-email")) {
//       $(this).parent().remove();
//       updateLivePreview();
//     }
//   });

//   // Open customization panel on field click
//   $(document).on("click", ".crfb-field", function () {
//     openCustomizationPopup($(this));
//   });

//   // Function to open the customization popup for a field
//   function openCustomizationPopup(field) {
//     // Remove existing popups and create a new one
//     $(".field-customization-popup").remove();
//     var popup = $(`
//       <div class="field-customization-popup">
//         <h3>Customize Field</h3>
//         <label>Label: <input type="text" class="field-label-input" value="${field
//           .find(".field-label")
//           .text()}"></label>
//         <label>Placeholder: <input type="text" class="field-placeholder-input" value="${
//           field.data("placeholder") || ""
//         }"></label>
//         <label>Required: <input type="checkbox" class="field-required-input" ${
//           field.data("required") ? "checked" : ""
//         }></label>
//         <button class="save-field">Save</button>
//         <button class="close-popup">Close</button>
//       </div>
//     `);

//     $("body").append(popup);

//     // Position the popup near the clicked field
//     popup.css({
//       top: field.offset().top + 20,
//       left: field.offset().left + 20,
//     });

//     // Save updates from the popup
//     popup.find(".save-field").on("click", function () {
//       var newLabel = popup.find(".field-label-input").val();
//       var newPlaceholder = popup.find(".field-placeholder-input").val();
//       var isRequired = popup.find(".field-required-input").is(":checked");

//       // Update field attributes and live preview
//       field.find(".field-label").text(newLabel);
//       field.data("placeholder", newPlaceholder);
//       field.data("required", isRequired);
//       updateLivePreview();

//       popup.remove();
//     });

//     // Close popup without saving
//     popup.find(".close-popup").on("click", function () {
//       popup.remove();
//     });
//   }

//   // Update live preview based on canvas fields
//   function updateLivePreview() {
//     var preview = $("#crfb-live-preview");
//     preview.empty();

//     $("#crfb-canvas-fields .crfb-field").each(function () {
//       var fieldType = $(this).data("type");
//       var placeholder = $(this).data("placeholder");
//       var required = $(this).data("required") ? "required" : "";

//       var fieldHtml;
//       switch (fieldType) {
//         case "text":
//           fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
//           break;
//         case "number":
//           fieldHtml = `<input type="number" placeholder="${placeholder}" ${required} />`;
//           break;
//         case "textarea":
//           fieldHtml = `<textarea placeholder="${placeholder}" ${required}></textarea>`;
//           break;
//         case "email":
//           fieldHtml = `<input type="email" placeholder="${placeholder}" ${required} />`;
//           break;
//         case "select":
//           fieldHtml = `<select ${required}><option>${
//             placeholder || "Select an option"
//           }</option></select>`;
//           break;
//         case "checkbox":
//           fieldHtml = `<input type="checkbox" ${required}> ${placeholder}`;
//           break;
//         case "radio":
//           fieldHtml = `<input type="radio" ${required}> ${placeholder}`;
//           break;
//         case "password":
//           fieldHtml = `<input type="password" placeholder="${placeholder}" ${required} />`;
//           break;
//         case "date":
//           fieldHtml = `<input type="date" ${required} />`;
//           break;
//         case "time":
//           fieldHtml = `<input type="time" ${required} />`;
//           break;
//         case "file":
//           fieldHtml = `<input type="file" ${required} />`;
//           break;
//         default:
//           fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
//       }
//       preview.append(`<div class="preview-field">${fieldHtml}</div>`);
//     });
//   }
// });
jQuery(document).ready(function ($) {
  // Make available fields draggable
  $("#crfb-field-palette li").draggable({ helper: "clone" });
  $("#crfb-canvas-fields").sortable();

  // Form canvas droppable to accept draggable fields
  $("#crfb-form-canvas").droppable({
    accept: "#crfb-field-palette li",
    drop: function (event, ui) {
      var fieldType = ui.helper.data("type");
      var newField = $("<li>")
        .addClass("crfb-field")
        .attr("data-type", fieldType)
        .attr("data-placeholder", "")
        .attr("data-required", false);

      newField.append(
        `<span class="field-label">${
          fieldType.charAt(0).toUpperCase() + fieldType.slice(1)
        } Field</span>`
      );

      // Add delete and move icons, with delete restriction for default email field
      if (fieldType !== "email") {
        newField.append(
          '<span class="crfb-delete dashicons dashicons-no"></span>'
        );
      } else {
        newField.addClass("default-email");
      }
      newField.append(
        '<span class="crfb-move dashicons dashicons-move"></span>'
      );

      // Append the new field to the canvas and update preview
      $("#crfb-canvas-fields").append(newField);
      updateLivePreview();
    },
  });

  // Delete field on click, excluding default email field
  $(document).on("click", ".crfb-delete", function (event) {
    event.stopPropagation(); // Prevents event from reaching parent .crfb-field
    if (!$(this).parent().hasClass("default-email")) {
      $(this).parent().remove();
      updateLivePreview();
    }
  });

  // Open customization panel on field click
  $(document).on("click", ".crfb-field", function () {
    openCustomizationPopup($(this));
  });

  // Function to open the customization popup for a field
  function openCustomizationPopup(field) {
    // Remove existing popups and create a new one
    $(".field-customization-popup").remove();
    var popup = $(
      `<div class="field-customization-popup">
        <h3>Customize Field</h3>
        <label>Label: <input type="text" class="field-label-input" value="${field
          .find(".field-label")
          .text()}"></label>
        <label>Placeholder: <input type="text" class="field-placeholder-input" value="${
          field.data("placeholder") || ""
        }"></label>
        <label>Required: <input type="checkbox" class="field-required-input" ${
          field.data("required") ? "checked" : ""
        }></label>
        <button class="save-field">Save</button>
        <button class="close-popup">Close</button>
      </div>`
    );

    $("body").append(popup);

    // Position the popup near the clicked field
    popup.css({
      top: field.offset().top + 20,
      left: field.offset().left + 20,
    });

    // Save updates from the popup
    popup.find(".save-field").on("click", function () {
      var newLabel = popup.find(".field-label-input").val();
      var newPlaceholder = popup.find(".field-placeholder-input").val();
      var isRequired = popup.find(".field-required-input").is(":checked");

      // Update field attributes and live preview
      field.find(".field-label").text(newLabel);
      field.data("placeholder", newPlaceholder);
      field.data("required", isRequired);
      updateLivePreview();

      popup.remove();
    });

    // Close popup without saving
    popup.find(".close-popup").on("click", function () {
      popup.remove();
    });
  }

  // Update live preview based on canvas fields
  function updateLivePreview() {
    var preview = $("#crfb-live-preview");
    preview.empty();

    $("#crfb-canvas-fields .crfb-field").each(function () {
      var fieldType = $(this).data("type");
      var placeholder = $(this).data("placeholder");
      var required = $(this).data("required") ? "required" : "";

      var fieldHtml;
      switch (fieldType) {
        case "text":
          fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
          break;
        case "number":
          fieldHtml = `<input type="number" placeholder="${placeholder}" ${required} />`;
          break;
        case "textarea":
          fieldHtml = `<textarea placeholder="${placeholder}" ${required}></textarea>`;
          break;
        case "email":
          fieldHtml = `<input type="email" placeholder="${placeholder}" ${required} />`;
          break;
        case "select":
          fieldHtml = `<select ${required}><option>${
            placeholder || "Select an option"
          }</option></select>`;
          break;
        case "checkbox":
          fieldHtml = `<input type="checkbox" ${required}> ${placeholder}`;
          break;
        case "radio":
          fieldHtml = `<input type="radio" ${required}> ${placeholder}`;
          break;
        case "password":
          fieldHtml = `<input type="password" placeholder="${placeholder}" ${required} />`;
          break;
        case "date":
          fieldHtml = `<input type="date" ${required} />`;
          break;
        case "time":
          fieldHtml = `<input type="time" ${required} />`;
          break;
        case "file":
          fieldHtml = `<input type="file" ${required} />`;
          break;
        default:
          fieldHtml = `<input type="text" placeholder="${placeholder}" ${required} />`;
      }
      preview.append(`<div class="preview-field">${fieldHtml}</div>`);
    });
  }

  // Save form data to server
  $("#crfb-save-form").on("click", function () {
    var formFields = [];
    $("#crfb-canvas-fields .crfb-field").each(function () {
      formFields.push({
        type: $(this).data("type"),
        placeholder: $(this).data("placeholder"),
        required: $(this).data("required"),
      });
    });
    $.post(crfb_vars.ajaxurl, {
      action: "crfb_save_form",
      form_fields: formFields,
      nonce: crfb_vars.nonce,
    }).done(function (response) {
      alert(response.data.message);
    });
  });

  // Reset form to default state
  $("#crfb-reset-form").click(function () {
    if (
      confirm(
        "Are you sure you want to reset the form? All fields will be cleared."
      )
    ) {
      $("#crfb-canvas-fields").children().not(".default-email").remove();
      updateLivePreview();
    }
  });
});
