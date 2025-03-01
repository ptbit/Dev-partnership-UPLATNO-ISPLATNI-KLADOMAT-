"use strict";

document.querySelector('.hero__btn').addEventListener('click', function () {
  var targetElement = document.getElementById('result');
  var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
document.querySelector('.service__btn').addEventListener('click', function () {
  var targetElement = document.getElementById('result');
  var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDekUsSUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNJLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFFdkQsSUFBTUMsY0FBYyxHQUFHRixhQUFhLENBQUNHLHFCQUFxQixFQUFFLENBQUNDLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtFQUUxRkQsTUFBTSxDQUFDRSxRQUFRLENBQUM7SUFDZEgsR0FBRyxFQUFFRixjQUFjO0lBQ25CTSxRQUFRLEVBQUU7RUFDWixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRlgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQzVFLElBQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDSSxjQUFjLENBQUMsUUFBUSxDQUFDO0VBRXZELElBQU1DLGNBQWMsR0FBR0YsYUFBYSxDQUFDRyxxQkFBcUIsRUFBRSxDQUFDQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7RUFFMUZELE1BQU0sQ0FBQ0UsUUFBUSxDQUFDO0lBQ2RILEdBQUcsRUFBRUYsY0FBYztJQUNuQk0sUUFBUSxFQUFFO0VBQ1osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDcwO1xyXG5cclxuICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcclxuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZV9fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDcwO1xyXG5cclxuICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcclxuICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICB9KTtcclxufSk7XHJcblxyXG4iXX0=
